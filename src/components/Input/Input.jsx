import React, { useState } from 'react'

const Input = () => {
    const [input, setInput] = useState("");
    return (
        <div>
            <form >
                <input
                    type="text"
                    placeholder='Enter task to do ...'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Input