import { render, screen } from '@testing-library/react';
import Input from "../Input";
import userEvent from "@testing-library/user-event"

describe("Input", () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Input />);
    });
    test("Input should be initially empty", () => {
        expect(screen.getByRole("textbox").value).toBe("");
    });
    test("should be able to type into input", () => {
        const inputElement = screen.getByRole("textbox");
        userEvent.type(inputElement, "code stuff");
        expect(inputElement.value).toBe("code stuff");
    });
});