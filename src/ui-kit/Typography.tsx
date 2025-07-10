import React from "react";
import { Text, TextProps, StyleSheet, TextStyle } from "react-native";

interface TypographyProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

/**
 * Headings
 */
export const Headline1 = (props: TypographyProps) => (
  <Text {...props} style={[styles.h1, props.style]} />
);
export const Headline2 = (props: TypographyProps) => (
  <Text {...props} style={[styles.h2, props.style]} />
);
export const Headline3 = (props: TypographyProps) => (
  <Text {...props} style={[styles.h3, props.style]} />
);
export const Headline4 = (props: TypographyProps) => (
  <Text {...props} style={[styles.h4, props.style]} />
);
export const Headline5 = (props: TypographyProps) => (
  <Text {...props} style={[styles.h5, props.style]} />
);
export const Headline6 = (props: TypographyProps) => (
  <Text {...props} style={[styles.h6, props.style]} />
);

/**
 * Subtitles & Body
 */
export const Subtitle1 = (props: TypographyProps) => (
  <Text {...props} style={[styles.subtitle1, props.style]} />
);
export const Subtitle2 = (props: TypographyProps) => (
  <Text {...props} style={[styles.subtitle2, props.style]} />
);
export const Body1 = (props: TypographyProps) => (
  <Text {...props} style={[styles.body1, props.style]} />
);
export const Body2 = (props: TypographyProps) => (
  <Text {...props} style={[styles.body2, props.style]} />
);

/**
 * Button, Caption, Overline
 */
export const ButtonText = (props: TypographyProps) => (
  <Text {...props} style={[styles.button, props.style]} />
);
export const Caption = (props: TypographyProps) => (
  <Text {...props} style={[styles.caption, props.style]} />
);
export const Overline = (props: TypographyProps) => (
  <Text {...props} style={[styles.overline, props.style]} />
);

/**
 * Styles following Material Design 2 type scale
 */
const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: "300",
    letterSpacing: -1.5,
    color: "#131311",
  },
  h2: {
    fontSize: 32,
    fontWeight: "300",
    letterSpacing: -0.5,
    color: "#131311",
  },
  h3: { fontSize: 28, fontWeight: "400", letterSpacing: 0, color: "#131311" },
  h4: {
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0.25,
    color: "#131311",
  },
  h5: { fontSize: 20, fontWeight: "400", letterSpacing: 0, color: "#131311" },
  h6: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.15,
    color: "#131311",
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.15,
    color: "#131311",
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.1,
    color: "#131311",
  },
  body1: {
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.5,
    color: "#131311",
  },
  body2: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.25,
    color: "#131311",
  },
  button: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.25,
    textTransform: "uppercase",
    color: "#131311",
  },
  caption: {
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.4,
    color: "#131311",
  },
  overline: {
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#131311",
  },
});
