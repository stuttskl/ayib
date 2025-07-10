import { render } from "@testing-library/react-native";
import { DetailsScreen } from "../Details";

describe("<HomeScreen />", () => {
  test("Text renders correctly on HomeScreen", () => {
    const { getByText } = render(<DetailsScreen />);

    getByText("Welcome!");
  });
});
