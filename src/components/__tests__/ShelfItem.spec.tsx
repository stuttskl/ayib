import { render } from "@testing-library/react-native";
import { ShelfItem } from "../ShelfItem";
import { getLabel } from "@react-navigation/elements";

describe("ShelfItem", () => {
  const ShelfItemMockProps = {
    color: "#000000",
    name: "Shelf Name",
    numBooks: 10,
  };
  it("should render all props correctly", () => {
    const { getByText } = render(
      <ShelfItem
        color={ShelfItemMockProps.color}
        name={ShelfItemMockProps.name}
        numBooks={ShelfItemMockProps.numBooks}
      />
    );

    expect(getByText(ShelfItemMockProps.name)).toBeTruthy();
    expect(getByText("10 books")).toHaveTextContent("10 books");
  });
});
