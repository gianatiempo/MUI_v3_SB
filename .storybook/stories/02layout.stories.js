
import React from 'react';
import GridSpacingStory from './layout/grid.spacing';
import GridFluidStory from './layout/grid.fluid';
import GridBreakpointStory from './layout/grid.breakpoint';
import GridInteractiveStory from './layout/grid.interactive';
import GridAutolayoutStory from './layout/grid.autolayout';
import GridComplexStory from './layout/grid.autolayout';
import GridCssStory from './layout/grid.css';
import GridNestedStory from './layout/grid.nested';
import GridLImitationsStory from './layout/grid.limitations';

import BreakpointsCSSMediaQueryStory from './layout/breakpoints.css';
import BreakpointsJavascriptStory from './layout/breakpoints.javascript';
import BreakpointsRenderPropsStory from './layout/breakpoints.renderProps';

const style = { padding: '10px' };

export const GridSpacing = () => <div style={style}><GridSpacingStory /></div>;
export const GridFluid = () => <div style={style}><GridFluidStory /></div>;
export const GridBreakpoint = () => <div style={style}><GridBreakpointStory /></div>;
export const GridInteractive = () => <div style={style}><GridInteractiveStory /></div>;
export const GridAutolayout = () => <div style={style}><GridAutolayoutStory /></div>;
export const GridComplex = () => <div style={style}><GridComplexStory /></div>;
export const GridCss = () => <div style={style}><GridCssStory /></div>;
export const GridNested = () => <div style={style}><GridNestedStory /></div>;
export const GridLImitations = () => <div style={style}><GridLImitationsStory /></div>;

export const BreakpointsCSSMediaQuery = () => <div style={style}><BreakpointsCSSMediaQueryStory /></div>;
export const BreakpointsJavascript = () => <div style={style}><BreakpointsJavascriptStory /></div>;
export const BreakpointsRenderProps = () => <div style={style}><BreakpointsRenderPropsStory /></div>;


export default { title: 'Layout' };