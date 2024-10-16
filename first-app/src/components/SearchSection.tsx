import React, { Component } from "react";

interface SearchSectionProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

interface SearchSectionState {
  inputValue: string;
}

class SearchSection extends Component<SearchSectionProps, SearchSectionState> {
  constructor(props: SearchSectionProps) {
    super(props);
    const savedTerm = localStorage.getItem('searchTerm') || '';
    this.state = {
      inputValue: savedTerm.trim()
    };
  }

  handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({inputValue: event.target.value})
  }

  handleButtonSearchClick = () => {
    const trimmedValue = this.state.inputValue.trim();
    this.props.onSearch(trimmedValue);
    localStorage.setItem('searchTerm', trimmedValue);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} placeholder="Search..."/>
        <button onClick={this.handleButtonSearchClick}>Search</button>
      </div>
    )
  }
}

export default SearchSection;