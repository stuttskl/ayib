import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Body1,
  Body2,
  ButtonText,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Subtitle1,
  Subtitle2,
} from "../ui-kit/Typography";
import { theme } from "../ui-kit/theme";

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.background.main,
      }}
    >
      <Headline1>Headline 1 Example</Headline1>
      <Headline2>Headline 2 Example</Headline2>
      <Headline3>Headline 3 Example</Headline3>
      <Headline4>Headline 4 Example</Headline4>
      <Headline5>Headline 5 Example</Headline5>
      <Headline6>Headline 6 Example</Headline6>

      <Subtitle1>Subtitle 1 Example</Subtitle1>
      <Subtitle2>Subtitle 2 Example</Subtitle2>

      <Body1>Body 1 Example - This is your primary paragraph text.</Body1>
      <Body2>Body 2 Example - This is for secondary paragraphs.</Body2>

      <ButtonText>Button Text Example</ButtonText>

      <Caption>Caption Example - Small helper text.</Caption>

      <Overline>Overline Example - Section label</Overline>
    </View>
  );
}
