import { createElement } from "react";

const style = {
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
};

const IcoMoon = ({ iconSet, icon, size, disableFill, removeInlineStyle, ...props }) => {

  if (!iconSet || !icon) {
    console.warn('The "iconSet" and "icon" props are required.');
    return null;
  }

  const currentIcon = iconSet.icons.find(item => item.properties.name === icon);

  if (!currentIcon) {
    console.warn(`"${icon}" icon not found.`);
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

  const { width = '1024' } = currentIcon.icon;

  props.viewBox = `0 0 ${width} 1024`;

  const paths = currentIcon.icon.paths.map((path, index) =>
    createElement("path", {
      d: path,
      key: icon + index,
      ...(!disableFill ? currentIcon.icon.attrs[index] : {}),
    })
  );

  return createElement('svg', props, paths);
};

export default IcoMoon;