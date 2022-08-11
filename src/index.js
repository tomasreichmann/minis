import React from "react";
import ReactDOM from "react-dom";
import { pages } from "./content";

const bodyStyle = {};
const pageMargin = 10;
const pageStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  width: `${210 - pageMargin}mm`,
  height: `${297 - pageMargin}mm`,
  backgroundColor: "white",
  // border: "1px dotted lightgrey",
  pageBreakAfter: "always"
};
const miniStyle = {};
const miniTop = {
  transform: "rotateX(180deg)"
};
const miniBottom = {};
const miniImage = {
  position: "relative",
  backgroundRepeat: "no-repeat",
  overflow: "hidden"
};
const miniCap = {
  backgroundColor: "#EEE",
  borderRadius: "0 0 50% 50%"
};

const MiniPage = ({ minis }) => {
  return (
    <div style={pageStyle}>
      {minis.map((mini, miniIndex) => {
        const content = (
          <>
            <div
              style={{
                ...miniImage,
                height: mini.style.height,
                backgroundImage: `url(${mini.imageUri})`,
                backgroundSize: `${mini.imageStyle.size}% auto`,
                backgroundPosition: `${mini.imageStyle.left}px ${
                  mini.imageStyle.top
                }px`
              }}
            />
            <div
              style={{
                ...miniCap,
                paddingBottom: mini.capSize || "50%",
                borderRadius: `0 0 ${mini.style.width} ${mini.style.width}`
              }}
            />
          </>
        );
        return (
          <div
            key={miniIndex}
            style={{
              ...miniStyle,
              width: mini.style.width
            }}
          >
            <div style={miniTop}>{content}</div>
            <div style={miniBottom}>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="App" style={bodyStyle}>
        {pages.map((page, pageIndex) => (
          <MiniPage key={pageIndex} minis={page} />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
