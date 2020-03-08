import { addDecorator } from '@storybook/react';
import { withMuiTheme } from "@harelpls/storybook-addon-materialui";
import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({ palette: { type: 'light', }, });
const darkTheme = createMuiTheme({ palette: { type: 'dark', }, });

// globally with custom themes
addDecorator(withMuiTheme({
  "Light": lightTheme,
  "Dark": darkTheme
}))