import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const ariDark =  create({ base: 'dark', brandTitle: 'MUI v3 && UI Toolkit', appBg: '#4f4f4f', appContentBg: '#4f4f4f', appBorderColor:  "#4f4f4f", barBg: "#4f4f4f" });

addons.setConfig({ panelPosition: 'right', theme: ariDark });