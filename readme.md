# React-IcoMoon

[![Build Status](https://github.com/aykutkardas/react-icomoon/workflows/build/badge.svg?color=%234fc921)](https://github.com/aykutkardas/react-icomoon/actions)
[![npm](https://img.shields.io/npm/v/react-icomoon?color=%234fc921)](https://www.npmjs.com/package/react-icomoon)
![npm](https://img.shields.io/npm/dw/react-icomoon)
[![License](https://img.shields.io/badge/License-MIT-green.svg?color=%234fc921)](https://opensource.org/licenses/MIT)

![React-Icomoon Logo](https://raw.githubusercontent.com/aykutkardas/React-IcoMoon/master/logo.png)

**📦 Zero Dependencies**

With React-Icomoon you can easily use the icons you have selected or created in icomoon.

## [Demo](https://codesandbox.io/s/react-icomoon-demo-13pce)

## Install

```
npm install react-icomoon
```

## Usage

You can use the icons you selected on IcoMoon by downloading the `selection.json` file.

https://icomoon.io/app/

### Declare

```js
// icon.js
import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("./selection.json");

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
```

### Use

```js
import Icon from "./icon";

<Icon icon="pencil" size={20} color="orange" />;
```

## Props List

| Name              | Type          | Default   | Sample                        |
| ----------------- | ------------- | --------- | ----------------------------- |
| iconSet           | Object        | undefined | "selection.json file content" |
| icon              | String        | undefined | "home"                        |
| size              | Number,String | undefined | "1em", 10, "100px"            |
| color             | String        | undefined | "red", "#f00", "rgb(0,0,0)"   |
| style             | Object        | {...}     | { color: '#ff0'}              |
| title             | String        | undefined | "Icon Title"                  |
| className         | String        | undefined | "icomoon"                     |
| disableFill       | Boolean       | undefined | true                          |
| removeInlineStyle | Boolean       | undefined | true                          |

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

### **Step 2:** Declare

#### Additional props for React Native

| Name          | Type            | Default   | Sample        |
| ------------- | --------------- | --------- | ------------- |
| native        | Boolean         | undefined | true          |
| SvgComponent  | React.Component | undefined | SvgComponent  |
| PathComponent | React.Component | undefined | PathComponent |

```js
// icon.js
import React from "react";
import IcoMoon from "react-icomoon";
import { Svg, Path } from "react-native-svg";
const iconSet = require("./selection.json");

const Icon = ({ ...props }) => {
  return (
    <IcoMoon
      native
      SvgComponent={Svg}
      PathComponent={Path}
      iconSet={iconSet}
      {...props}
    />
  );
};

export default Icon;
```

**Step 3:** Usage

```js
import Icon from "./icon";

<Icon icon="pencil" size={20} color="orange" />;
```
