import './App.css';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';
import ErrorBoundary from './components/ErrorBoundary';
import { Component } from 'react';

interface AppState {
    searchTerm: string;
    results: { name: string; description: string }[];
    isLoading: boolean;
    hasError: boolean;
}

class App extends Component<object, AppState> {
    constructor(props: object) {
        super(props);
        this.state = {
            searchTerm: '',
            results: [],
            isLoading: false,
            hasError: false,
        };
    }

    componentDidMount() {
        const savedTerm = localStorage.getItem('searchTerm') || '';
        if (savedTerm) {
            this.performSearch(savedTerm);
        }
    }

    performSearch = (term: string) => {
        this.setState({ isLoading: true, hasError: false });
        const url = term
            ? `https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`
            : 'https://pokeapi.co/api/v2/pokemon?limit=10';
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Pokemon not found or failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                const results = term
                    ? [{ name: data.name, description: `Height: ${data.height}, Weight: ${data.weight}` }]
                    : data.results.map((pokemon: { name: string }) => ({
                          name: pokemon.name,
                          description: 'A wild Pokemon from PokeAPI',
                      }));
                this.setState({ results, isLoading: false, searchTerm: term });
                localStorage.setItem('searchTerm', term);
            })
            .catch((error) => {
                console.error(error);
                this.setState({ isLoading: false, hasError: true });
            });
    };
    handleSearch = (term: string) => {
        this.performSearch(term.trim());
    };
    render() {
        return (
            <ErrorBoundary>
                <div>
                    <button
                        onClick={() => {
                            throw new Error('Test Error');
                        }}
                    >
                        Throw Error
                    </button>
                    <SearchSection searchTerm={this.state.searchTerm} onSearch={this.handleSearch} />
                    <ResultsSection
                        results={this.state.results}
                        isLoading={this.state.isLoading}
                        hasError={this.state.hasError}
                    />
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
