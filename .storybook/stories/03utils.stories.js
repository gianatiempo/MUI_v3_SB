
import React from 'react';
import ModalSimpleStory from './utils/modal.simple';

import TransitionsCollapseStory from './utils/transitions.collapse';
import TransitionsFadeStory from './utils/transitions.fade';
import TransitionsGrowStory from './utils/transitions.grow';
import TransitionsSlideStory from './utils/transitions.slide';
import TransitionsZoomStory from './utils/transitions.zoom';

const style = { padding: '10px' };

export const ModalSimple = () => <div style={style}><ModalSimpleStory /></div>;

export const TransitionsCollapse = () => <div style={style}><TransitionsCollapseStory /></div>;
export const TransitionsFade = () => <div style={style}><TransitionsFadeStory /></div>;
export const TransitionsGrow = () => <div style={style}><TransitionsGrowStory /></div>;
export const TransitionsSlide = () => <div style={style}><TransitionsSlideStory /></div>;
export const TransitionsZoom = () => <div style={style}><TransitionsZoomStory /></div>;


export default { title: 'Utils' };