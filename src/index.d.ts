import * as React from 'react';

type SelectionFile = {
  icons: Object[],
  [string]: any,
}

export interface Props {
  iconSet: SelectionFile,
  icon: string,
  size?: string | number,
  disableFill?: boolean,
  removeInlineStyle?: boolean,
}

export default class IcoMoon extends React.Component<Props> { }