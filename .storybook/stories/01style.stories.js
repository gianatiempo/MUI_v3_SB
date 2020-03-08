
import React from 'react';
import SVGIconsStory from './style/svgIcons';
import MaterialIconsStory from './style/materialIcons';
import TypographyStory from './style/typography';

const style = { padding: '10px' };

export const SVGIcons = () => <div style={style}><SVGIconsStory /></div>;
export const MaterialIcons = () => <div style={style}><MaterialIconsStory /></div>;
export const Typography = () => <div style={style}><TypographyStory /></div>;

export default { title: 'Style'};