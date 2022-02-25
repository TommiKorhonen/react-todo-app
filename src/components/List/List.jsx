import React, { useState } from 'react'
import Tasks from "../Tasks/Tasks"
const List = () => {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, input])
        console.log(tasks)
    }
    return (
        <article>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter task to do ...'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            <Tasks tasks={tasks} />
        </article>
    )
}

export default List