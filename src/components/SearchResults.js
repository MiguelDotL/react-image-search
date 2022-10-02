import React from "react";
import ImageCount from "./ImageCount";
import ImageList from "./ImageList";

class SearchResults extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { hasSearched: false };
  // }

  render() {
    console.log("SearchResults: ", this.props);

    if (this.props.hasSearched) {
      return (
        <div className="image-list-container ui segments">
          <ImageCount
            term={this.props.term}
            imageCount={this.props.imageCount}
          />

          <div className="ui horizontal divider">
            <i class="angle double down icon"></i>
          </div>

          <ImageList images={this.props.images} />
        </div>
      );
    }
  }
}

export default SearchResults;
