import {Component} from "react";

interface ResultsSectionProps {
  results: {name: string; description: string}[];
  isLoading: boolean;
  hasError: boolean;
}

class ResultsSection extends Component<ResultsSectionProps> {
  render() {
    const {results, isLoading, hasError} = this.props;
    if(isLoading) {
      return <div>Loading...</div>
    }
    if (hasError) {
      return <p>Error: Could not fetch Pokémon data.</p>;
    }
    if (results.length === 0) {
      return <p>No Pokémon found</p>;
    }
    return (
      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
            ))}
          </ul>
        ): (
          <p>No results found.</p>
        )}
      </div>
    )
  }
}

export default ResultsSection;