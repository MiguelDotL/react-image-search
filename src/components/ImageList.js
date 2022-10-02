import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // console.log(props.images);
  const images = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return (
    <div className="image-list ui container ">
      <div className="ui three column doubling stackable masonry grid">
        {images}
      </div>
    </div>
  );
};

export default ImageList;
