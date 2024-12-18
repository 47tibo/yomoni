import { render } from "@testing-library/react-native";
import ArtObjectSection from "../ArtObjectSection";

describe("ArtObjectSection", () => {
  it("renders correctly with given props", () => {
    const { toJSON } = render(
      <ArtObjectSection label="Test Label" text="Test Text" />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
