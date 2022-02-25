import { render, screen } from '@testing-library/react';
import Task from "../Task";
import userEvent from "@testing-library/user-event"

const taskProps = ["Eat food"]

describe("todo task", () => {
    test("should show task info", () => {
        render(<Task {...taskProps} />);
        expect(screen.getByRole("listitem", {
            task: /eat food/i
        })).toBeInTheDocument()
    })
})