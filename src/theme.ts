import { DefaultTheme } from 'styled-components';
import { ThemeType } from './types';

export const colors = {
  whiteGray: '#f7f6f3',
  dusk: 'rgb(65,77,107)',
  dodgerBlue: 'rgb(58,139,255)',
  skyBlue: 'rgb(100,199,255)',
  green: 'rgb(29,211,168)',
  greenBlue: 'rgb(36,205,151)',
  greenishCyan: '#50e3c2',
  mediumGray: 'rgb(134,154,183)',
  paleGray: 'rgb(221,226,236)',
  lightBackground: '#ffffff',
  lightBackgroundLight: '#f7f6f3',
  darkBackground: '#323739',
  darkBackgroundLight: '#393241',
  cloudyBlue: 'rgb(175,194,219)',
  google: 'rgb(224,66,56)',
  facebook: 'rgb(52,89,151)',
};

export interface Theme {
  background: string;
  backgroundDark: string;
  btnPrimary: string;
  btnPrimaryFont: string;
  btnPrimaryLight: string;
  btnPrimaryLightFont: string;
  textDisabled: string;
  btnDisabled: string;
  fontColor: string;
  fontSubColor: string;
  tintColor: string;
  indicatorColor: string;
  inactiveColor: string;
  primary: string;
  primaryLight: string;
  status: string;
  placeholder: string;
}

const theme = {
  light: {
    background: colors.lightBackground,
    backgroundDark: colors.dodgerBlue,
    btnPrimary: colors.dodgerBlue,
    btnPrimaryFont: 'white',
    btnPrimaryLight: 'white',
    btnPrimaryLightFont: colors.dodgerBlue,
    textDisabled: '#969696',
    btnDisabled: 'rgb(224,224,224)',
    fontColor: 'black',
    fontSubColor: colors.dusk,
    tintColor: colors.dodgerBlue,
    lineColor: colors.paleGray,
    indicatorColor: colors.dodgerBlue,
    inactiveColor: '#a3a3a3',
    primary: colors.dodgerBlue,
    primaryLight: colors.skyBlue,
    status: colors.greenishCyan,
    placeholder: colors.cloudyBlue,
  },
  dark: {
    background: colors.darkBackground,
    backgroundDark: '#262A2C',
    btnPrimary: '#262A2C',
    btnPrimaryFont: 'white',
    btnPrimaryLight: '#696969',
    btnPrimaryLightFont: '#262A2C',
    textDisabled: '#969696',
    btnDisabled: 'rgb(224,224,224)',
    fontColor: 'white',
    fontSubColor: colors.paleGray,
    tintColor: '#a3a3a3',
    lineColor: '#515557',
    indicatorColor: 'white',
    inactiveColor: colors.paleGray,
    primary: '#1F2324',
    primaryLight: '#262A2C',
    status: colors.greenishCyan,
    placeholder: colors.cloudyBlue,
  },
};

// prettier-ignore
export const createTheme = (type = ThemeType.LIGHT): DefaultTheme => {
  switch (type) {
    case ThemeType.LIGHT:
      return theme.light;
    case ThemeType.DARK:
      return theme.dark;
  }
  return theme.light;
};
