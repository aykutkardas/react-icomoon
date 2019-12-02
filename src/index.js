import { createElement } from "react";

const style = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  strokeWidth: 0,
  stroke: "currentColor",
  fill: "currentColor"
};

const IcoMoon = ({ iconSet, icon, size, removeInlineStyle, ...props }) => {

  if (!iconSet) {
    return null;
  }

  const currentIcon = iconSet.icons.find(item => item.properties.name === icon);

  if (!currentIcon) {
    return null;
  }

  if (size) {
    style.width = size;
    style.height = size;
  }

  props.style = {
    ...(removeInlineStyle ? {} : style),
    ...(props.style || {})
  };

  props.viewBox = `0 0 ${currentIcon.icon.width || '1024'} 1024`;

  const paths = currentIcon.icon.paths.map((path, index) =>
    createElement("path", {
      d: path,
      key: icon + index
    })
  );

  return createElement('svg', props, paths);
};

export default IcoMoon;