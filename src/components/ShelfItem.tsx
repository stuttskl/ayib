import { StyleSheet, Text, View } from "react-native";
import { Subtitle2 } from "../ui-kit/Typography";
import { theme } from "../ui-kit/theme";
import { spacing } from "../ui-kit/spacing";

interface ShelfItemProps {
  color: string;
  name: string;
  numBooks: number;
}

export const ShelfItem: React.FC<ShelfItemProps> = (props: ShelfItemProps) => {
  const { color, name, numBooks } = props;
  return (
    <View
      style={{
        backgroundColor: theme.colors.background.secondary,
        flexDirection: "row",
      }}
    >
      <View style={{ backgroundColor: color, width: 20, height: 40 }} />
      <View style={{ flexDirection: "row" }}>
        <Subtitle2>{name}</Subtitle2>
        <Subtitle2> • </Subtitle2>
        <Subtitle2 style={{ color: theme.colors.text.subtitle }}>
          {numBooks} books
        </Subtitle2>
      </View>
    </View>
  );
};
