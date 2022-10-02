import React from "react";

const ImageCount = (props) => {
  console.log(props);
  // console.log(props.imageCount);

  const imageCountDisplay = (count) => {
    return count > 0 ? "inline" : "none";
  };

  return (
    <div className="image-count ui segment">
      <div className="ui large fluid horizontal label">
        <img
          className="ui right spaced avatar image"
          alt="alt"
          src="https://semantic-ui.com/images/avatar2/small/kristy.png"
        />
        We found <u>{props.imageCount}</u> results{" "}
        {props.imageCount && (
          <span className="results-count">
            for{" "}
            <strong className="ui large blue horizontal label">
              {props.term}
            </strong>
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageCount;
