import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  // componentDidMount() {
  //   this.imageRef.current.addEventListener("load", this.setSpans);
  //   // console.log(this.imageRef);
  // }

  // setSpans = () => {
  //   const height = this.imageRef.current.clientHeight;
  //   const spans = Math.ceil(height / 10);

  //   this.setState({ spans });
  // };

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div className="column">
        <div className="ui fluid card">
          <div class="image">
            <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
