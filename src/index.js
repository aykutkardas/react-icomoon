import React from "react";
import iconSetCreator from "./iconSetCreator";

const style = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  strokeWidth: 0,
  stroke: "currentColor",
  fill: "currentColor"
};

const IcoMoon = ({ icon, iconSet, ...props }) => {

  let iconPath;
  let iconViewBox;

  if (iconSet) {
    const customIcons = iconSetCreator(iconSet);
    iconPath = customIcons.path[icon];
    iconViewBox = customIcons.viewBox[icon] || "0 0 32 32";
  } else {
    const Icons = require('./icons').default;
    iconPath = Icons.path[icon] || [];
    iconViewBox = Icons.viewBox[icon] || "0 0 32 32";
  }

  const attributes = { ...props };

  attributes.className = (props.className || "");
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