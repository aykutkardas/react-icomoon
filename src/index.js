import React from "react";
import Icons from "./icons";

const style = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  strokeWidth: 0,
  stroke: "currentColor",
  fill: "currentColor"
};

const IcoMoon = ({ icon, ...props }) => {
  const iconPath = Icons.path[icon];
  const iconViewBox = Icons.viewBox[icon] || "0 0 32 32";

  const attributes = { ...props };

  attributes.className = (props.className || "") + (" icon icon-" + icon);
  attributes.viewBox = iconViewBox;
  attributes.style = {
    ...style,
    ...(props.style || {})
  };

  const paths = iconPath.map((path, index) =>
    React.createElement("path", {
      d: path,
      key: path + index
    })
  );

  return React.createElement('svg', attributes, paths);
};

export default IcoMoon;