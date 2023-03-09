import {extendTheme} from 'native-base';

const themeColors = {
  darkGray: '#343131',
  bgColor: '#f9f5f2',
  textColor: 'rgba(0,0,0,0.6)',
  button: '#262626',
  logo: '#ce7328',
};

const appTheme = extendTheme({
  colors: {
    darkGray: themeColors.darkGray,
    bgColor: themeColors.bgColor,
    textColor: themeColors.textColor,
    button: themeColors.button,
    logo: themeColors.logo,
  },

  components: {
    Box: {
      variants: {
        tabBar: {
          bg: themeColors.bgColor,
          flex: 1,
          padding: 4,
        },
      },
    },
  },
});

type CustomThemeType = typeof appTheme;

declare module 'native-base' {
  interface ICustomT extends CustomThemeType {}
}

export default appTheme;
