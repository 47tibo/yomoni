import { render } from "@testing-library/react-native";
import DetailCard from "../DetailCard";

test("DetailCard matches snapshot", () => {
  const { toJSON } = render(
    <DetailCard imageUrl={""} title={""} subtitle={""} objectNumber={""} />
  );
  expect(toJSON()).toMatchSnapshot();
});
