/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import List from '../List';

describe("List", () => {
    test("should show task info", () => {
        render(<List />);
        const inputElement = screen.getByRole("textbox");

        userEvent.type(inputElement, "write code")

        const submitBtn = screen.getByRole("button", {
            name: /submit/i
        });
        userEvent.click(submitBtn);
        expect(

            screen.queryByText(/write code/i)).toBeInTheDocument();

        userEvent.type(inputElement, "go for walk")
        userEvent.click(submitBtn);
        expect(
            screen.queryByText(/go for walk/i)).toBeInTheDocument();

        expect(screen.queryAllByRole("listitem").length).toBe(2);
    })
})