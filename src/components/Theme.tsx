import { createBox, createText, useTheme, } from '@shopify/restyle'
import { Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';

const {width} = Dimensions.get("window");

export const aspectRatio = width / 375;

export const palette = {
  white: "#FFFFFF",
  cyan: "#2CB9B0",
  lightCyan: "#E7F9F7",
  darkBlue: "#0C0D34",
  orange: "#FE5E33",
  yellow: "#FFC641",
  pink: "#FF87A2",
  darkPink: "#FF0058",
  violet: "#442CB9",
  lightBlue: "#BFEAF5",
  grey: "#F4F0EF",
  darkGrey: "#808080",
};

const theme ={
  colors: {
      primary: "#2CB9B0",
      secondary: "#0C0D34",
      bgYs: "#ce264d",
      text: "rgba(12, 13, 52, 0.7)",
      white: "white",
      grey: "#F4F0EF",
      darkGrey: "#8A8D90",
      danger: "#FF0058",
      orange:"#FE5E33",
      yellow:"#FFC641",
      pink:"#FF87A2",
      violet:"#442CB9",
      lightBlue:"#BFEAF5",
      background: palette.white,
      background2: palette.grey,
      primaryLight: palette.lightCyan,
      info: palette.darkGrey,
      edit: palette.lightBlue,
      body: "rgba(12, 13, 52, 0.7)",
      graph1: palette.orange,
      graph2: palette.yellow,
      drawer1: palette.orange,
      drawer2: palette.yellow,
      drawer3: palette.pink,
      drawer4: palette.violet,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 50,
    xxxl: 60,
    bigXl: 70,
    full: 80,
  },
  borderRadii: {
    zero: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
      hero: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "SFProDisplay-Bold",
        color: "white",
        textAlign: "center",
      },
      title1: {
          fontSize: 28,
          fontFamily: "SFProDisplay-Semibold",
          color: "secondary",
      },
      title2: {
        fontSize: 24,
        lineHeight: 30,
        fontFamily: "SFProDisplay-Semibold",
        color: "secondary",
    },
    title3: {
      fontSize: 16,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
  },
    body: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "SFProDisplay-Regular",
        color: "text",
    },
    button: {
        fontSize: 15,
        fontFamily: "SFProDisplay-Medium",
        color: "text",
    },
  },
  breakpoints: {},
};

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export type Theme = typeof theme;
export default theme;

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};