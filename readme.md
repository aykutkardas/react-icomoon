# React-IcoMoon

[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)


![React-Icomoon Logo](logo.png)

**Size < 2kb** and **0 Dependencies**

With React-Icomoon you can easily use the icons you have selected or created in icomoon.

## [Demo](https://codesandbox.io/s/react-icomoon-demo-13pce)

## Install

```
npm install react-icomoon
```

## Usage

You can use the icons you selected on IcoMoon by downloading the **selection.json** file.

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

<Icon icon="focus" />
```

## Props List
| Name              | Type          | Default   | Sample                        |
|-------------------|---------------|-----------|-------------------------------|
| iconSet           | Object        | undefined | "selection.json file content" |
| icon              | String        | undefined | "home"                        |
| size              | Number,String | undefined | "1em", 10, "100px"            |
| color             | String        | undefined | "red", "#f00", "rgb(0,0,0)"   |
| style             | Object        | {...}     | { color: '#ff0'}              |
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

---

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
  "bin1"
]
```