import React, { useState, useEffect, useRef } from 'react'
import { BsPlusSquareFill } from 'react-icons/bs';
export default function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div className="d-flex align-items-center justify-content-center">
                <input
                    type="text"
                    placeholder="Add a todo"
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef} />
                <button className="todo-btn"><BsPlusSquareFill className="add-todo" /></button>
            </div>
        </form>
    )
}
