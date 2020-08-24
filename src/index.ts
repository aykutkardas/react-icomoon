import { createElement } from 'react';

const style: {
  display: string;
  stroke: string;
  fill: string;
  width?: string | number;
  height?: string | number;
} = {
  display: 'inline-block',
  stroke: 'currentColor',
  fill: 'currentColor'
};

interface Attr {
  fill: string;
}

interface Properties {
  order: number;
  id: number;
  name: string;
  prevSize: number;
  code: number;
}

interface Icon {
  paths: string[];
  attrs: Attr[];
  isMulticolor: boolean;
  isMulticolor2: boolean;
  grid: number;
  tags: string[];
  width?: string;
}

interface Icons {
  icon: Icon;
  attrs: Attr[];
  properties: Properties;
  setIdx: number;
  setId: number;
  iconIdx: number;
}

interface IconSet {
  IcoMoonType: string;
  icons: Icons[];
  height: number;
  metadata: any;
  preferences: any;
}

export interface IcoMoonProps {
  iconSet: IconSet;
  icon: string;
  size?: string | number;
  disableFill?: boolean;
  removeInlineStyle?: boolean;
  viewBox?: string;
  style?: React.CSSProperties;
}

const IcoMoon: React.FC<IcoMoonProps> = ({
  iconSet,
  icon,
  size,
  disableFill,
  removeInlineStyle,
  ...props
}): React.ReactSVGElement | null => {
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
    ...(props.style || {})
  };

  const { width = '1024' } = currentIcon.icon;

  props.viewBox = `0 0 ${width} 1024`;

  const paths = currentIcon.icon.paths.map(<T>(path: T, index: number) =>
    createElement('path', {
      d: path,
      key: icon + index,
      ...(!disableFill ? currentIcon.icon.attrs[index] : {})
    })
  );

  return createElement('svg', props, paths);
};

export default IcoMoon;

export const iconList = (iconSet: IconSet) => {
  if (iconSet && Array.isArray(iconSet.icons)) {
    return iconSet.icons.map((icon) => icon.properties.name);
  }

  return null;
};
