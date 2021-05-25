import React, { createElement } from "react";

type IconSetItem = {
  properties: {
    name: string;
  };
  icon: { paths: []; attrs: []; width?: string };
};

type IconSet = {
  icons: IconSetItem[];
};

const style: React.CSSProperties = {
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
};

const IcoMoon: React.FC<{
  iconSet: IconSet;
  icon: string;
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
  [name: string]: any;
}> = ({
  iconSet,
  icon,
  size,
  disableFill,
  removeInlineStyle,
  SvgComponent,
  PathComponent,
  ...props
}) => {
  if (!iconSet || !icon) return null;

  const currentIcon = iconSet.icons.find(
    (item) => item.properties.name === icon
  );

  if (!currentIcon) return null;

  if (size) {
    style.width = size;
    style.height = size;
  }

  if (props.native) {
    style.display = "flex";
    style.flexDirection = "row";
    style.flexWrap = "wrap";
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
      ? createElement(PathComponent, pathProps)
      : createElement("path", pathProps);
  });

  return SvgComponent
    ? createElement(SvgComponent, props, paths)
    : createElement("svg", props, paths);
};

export const iconList = (iconSet) => {
  if (iconSet && Array.isArray(iconSet.icons)) {
    return iconSet.icons.map((icon) => icon.properties.name);
  }

  return null;
};

export default IcoMoon;
