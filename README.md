![React-Icomoon Logo](/banner.png)

[![Build Status](https://github.com/aykutkardas/react-icomoon/workflows/build/badge.svg?color=%234fc921)](https://github.com/aykutkardas/react-icomoon/actions)
[![npm](https://img.shields.io/npm/v/react-icomoon?color=%234fc921)](https://www.npmjs.com/package/react-icomoon)
![npm](https://img.shields.io/npm/dw/react-icomoon)
[![License](https://img.shields.io/badge/License-MIT-green.svg?color=%234fc921)](https://opensource.org/licenses/MIT)

It makes it very simple to use SVG icons in your `React` and `React-Native` projects.

### [Cheatsheet](https://react-icomoon.vercel.app/) - [Interactive Demo](https://codesandbox.io/s/react-icomoon-demo-13pce)

## Install

```
npm install react-icomoon
```

```
yarn add react-icomoon
```

## Usage

You can use the icons you selected on IcoMoon by downloading the `selection.json` file.

https://icomoon.io/app/

### Declare

```js
// Icon.jsx
import IcoMoon from "react-icomoon";
import iconSet from "./selection.json";

const Icon = (props) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
```

#### With TypeScript

```tsx
// Icon.tsx
import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "./selection.json";

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
```

### Use

```js
import Icon from "./Icon";

<Icon icon="pencil" size={20} color="orange" />;
```

## Props List

| Name              | Type          | Default | Sample                        |
| ----------------- | ------------- | ------- | ----------------------------- |
| iconSet           | Object        | -       | "selection.json file content" |
| icon              | String        | -       | "home"                        |
| size              | Number,String | -       | "1em", 10, "100px"            |
| color             | String        | -       | "red", "#f00", "rgb(0,0,0)"   |
| style             | Object        | {...}   | { color: '#ff0'}              |
| title             | String        | -       | "Icon Title"                  |
| className         | String        | -       | "icomoon"                     |
| disableFill       | Boolean       | -       | true                          |
| removeInlineStyle | Boolean       | -       | true                          |

### Default Style

```js
{
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
}
```

## iconList

You can use the iconList method to see a complete list of icons you can use.

```js
import IcoMoon, { iconList } from "react-icomoon";

iconList(iconSet);

// sample output
[
  "document",
  "camera",
  "genius",
  "chat",
  "heart1",
  "alarmclock",
  "star-full",
  "heart",
  "play3",
  "pause2",
  "bin1",
];
```

## React Native 🎉 • [Demo](https://snack.expo.io/@aykutkardas/react-icomoon)

### **Step 1:** Install Dependencies

```
npm install react-icomoon react-native-svg
```

```
yarn add react-icomoon react-native-svg
```

### **Step 2:** Declare

#### Additional props for React Native

| Name          | Type            | Default | Sample        |
| ------------- | --------------- | ------- | ------------- |
| native        | Boolean         | -       | true          |
| SvgComponent  | React.Component | -       | SvgComponent  |
| PathComponent | React.Component | -       | PathComponent |

```js
// Icon.jsx
import IcoMoon from "react-icomoon";
import { Svg, Path } from "react-native-svg";
import iconSet from "./selection.json";

const Icon = (props) => (
  <IcoMoon
    native
    SvgComponent={Svg}
    PathComponent={Path}
    iconSet={iconSet}
    {...props}
  />
);

export default Icon;
```

**Step 3:** Use

```js
import Icon from "./Icon";

<Icon icon="pencil" size={20} color="orange" />;
```
