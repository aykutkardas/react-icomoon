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

  const currentIcon = iconSet.icons.find(item => {
    if (item.name === icon) {
      return true;
    } else if (Array.isArray(item.tags) && item.tags[0] === icon) {
      return true;
    } else {
      return false;
    }
  });

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

  props.viewBox = `0 0 ${currentIcon.width || '1024'} 1024`;

  const paths = currentIcon.paths.map((path, index) =>
    createElement("path", {
      d: path,
      key: icon + index
    })
  );

  return createElement('svg', props, paths);
};

export default IcoMoon;