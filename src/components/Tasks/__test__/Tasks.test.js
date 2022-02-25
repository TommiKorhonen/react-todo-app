import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Tasks from '../Tasks';

let tasks = ["Eat food"];

describe("todo-tasks", () => {
    test("should render correct amount of listitems", () => {
        render(<Tasks tasks={tasks} />)
        expect(screen.queryAllByRole("listitem").length).toBe(1);
    })
})