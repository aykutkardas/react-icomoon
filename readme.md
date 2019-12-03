# React-IcoMoon

[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

## [Demo](https://codesandbox.io/s/github/aykutkardas/react-icomoon-playground)

#### Install

```
npm install react-icomoon
```

## Custom IconSet

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
