import React, { Component } from 'react';
import Icons from './icons';
import './icon.css';

class IconMoon extends Component {
    render() {
        let key = 0;
        let iconName = this.props.icon;
        let paths = Icons.path[iconName].map(path => <path key={key++} d={path}></path>);

        return (
            <svg
                className={ 'icon' + iconName }
                viewBox={Icons.viewBox[iconName] || '0 0 32 32'}>
                { paths }
            </svg>
        )
    }
}

export default IconMoon;
