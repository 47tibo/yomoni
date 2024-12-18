import STRING_RESOURCES from "@/assets/strings";
import { render, screen, userEvent } from "@testing-library/react-native";
import SearchForm from "../SearchForm";

const user = userEvent.setup();
const onSubmitMock = jest.fn();

describe("SearchForm", () => {
  beforeEach(() => {
    onSubmitMock.mockClear();
  });

  it("renders correctly", () => {
    render(<SearchForm onSubmit={onSubmitMock} defaultValue="" />);
    screen.getByPlaceholderText(STRING_RESOURCES.search_placeholder);
    screen.getByText(STRING_RESOURCES.search_button);
  });

  it("calls onSubmit with correct data when form is submitted", async () => {
    render(<SearchForm onSubmit={onSubmitMock} defaultValue="" />);
    const input = screen.getByPlaceholderText(
      STRING_RESOURCES.search_placeholder
    );
    const button = screen.getByText(STRING_RESOURCES.search_button);

    await user.type(input, "test query");
    await user.press(button);

    expect(onSubmitMock).toHaveBeenCalledWith(
      { search: "test query" },
      undefined
    );
  });

  it("does not call onSubmit when input is invalid", async () => {
    render(<SearchForm onSubmit={onSubmitMock} defaultValue="" />);
    const input = screen.getByPlaceholderText(
      STRING_RESOURCES.search_placeholder
    );
    const button = screen.getByText(STRING_RESOURCES.search_button);

    await user.type(input, "q");
    await user.press(button);

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it("shows FormControlErrorText when there is an error", async () => {
    render(<SearchForm onSubmit={onSubmitMock} defaultValue="" />);
    const input = screen.getByPlaceholderText(
      STRING_RESOURCES.search_placeholder
    );
    const button = screen.getByText(STRING_RESOURCES.search_button);

    await user.type(input, "q");
    await user.press(button);

    expect(
      screen.getByText(STRING_RESOURCES.search_error.replace("[[X]]", "3"))
    ).toBeTruthy();
  });
});
