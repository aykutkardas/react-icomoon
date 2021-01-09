import React, { createElement } from "react";

const style = {
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
};

const IcoMoon = ({
  iconSet,
  icon,
  size,
  disableFill,
  removeInlineStyle,
  SvgComponent,
  PathComponent,
  ...props
}) => {
  if (!iconSet || !icon) {
    console.warn('The "iconSet" and "icon" props are required.');
    return null;
  }

  const currentIcon = iconSet.icons.find(
    (item) => item.properties.name === icon
  );

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
    ...(props.style || {}),
  };

  const { width = "1024" } = currentIcon.icon;

  props.viewBox = `0 0 ${width} 1024`;

  const paths = currentIcon.icon.paths.map((path, index) => {
    const pathProps = {
      d: path,
      key: icon + index,
      ...(!disableFill ? currentIcon.icon.attrs[index] : {}),
    };

    return PathComponent
      ? <PathComponent {...pathProps} />
      : createElement("path", pathProps);
  });

  return SvgComponent
    ? <SvgComponent {...props} children={paths} />
    : createElement("svg", props, paths);
};

export default IcoMoon;

export const iconList = (iconSet) => {
  if (iconSet && Array.isArray(iconSet.icons)) {
    return iconSet.icons.map((icon) => icon.properties.name);
  }

  return null;
};
