import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class App extends React.Component {
  state = {
    hasSearched: false,
    images: [],
    imageCount: null,
  };

  onSearchSubmit = async (term) => {
    const searchPath = "/search/photos";

    const response = await unsplash.get(searchPath, {
      params: {
        query: term,
        per_page: 30,
      },
    });

    this.setState({
      term,
      images: response.data.results,
      imageCount: response.data.total,
    });
    if (!this.state.hasSearched) this.setState({ hasSearched: true });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 20 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SearchResults
          hasSearched={this.state.hasSearched}
          term={this.state.term}
          imageCount={this.state.imageCount}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
