import { View } from "react-native";
import { ShelfItem } from "../components/ShelfItem";

export function LibraryScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ShelfItem color={"#F7B32B"} name={"Want to read"} numBooks={24} />
      <ShelfItem color={"#A9E5BB"} name={"Currently reading"} numBooks={2} />
      <ShelfItem color={"#E4572E"} name={"Already read"} numBooks={24} />
      <ShelfItem
        color={"#2D1E2F"}
        name={"Didn't finish reading"}
        numBooks={24}
      />
      <ShelfItem color={"#9E829C"} name={"Want to read"} numBooks={24} />
    </View>
  );
}
