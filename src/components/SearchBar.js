import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  onFormChange = (e) => {
    this.setState({ term: e.target.value });

    setTimeout(() => this.props.onSubmit(this.state.term), 500);

    // this.onFormSubmit();
    // console.log(this.props);
  };

  render() {
    return (
      <div className="search-bar ui segment blue">
        <h2 className="ui center aligned icon block header">
          <i className="circular camera icon"></i>
          Image Search
        </h2>

        <form
          className="ui form"
          name="searchBarForm"
          onSubmit={this.onFormSubmit}>
          <div className="ui large fluid icon input field">
            {/* <label>Image Search</label> */}
            <input
              type="text"
              className="prompt"
              autoFocus={true}
              placeholder="Search Images"
              onChange={this.onFormChange}
              value={this.state.term}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
