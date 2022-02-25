import React, { useState } from 'react'
import Task from "../Task/Task"
const Tasks = ({ tasks }) => {
    return (
        <ul>
            {tasks && tasks.map((task, index) => {
                return (
                    <Task key={index} task={task} />
                )
            })}
        </ul>
    )
}

export default Tasks