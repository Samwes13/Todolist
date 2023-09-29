import React, { useState } from "react";
import TodoTable from "./TodolistTable";

export default function Todolist() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: "", date: "" });

    const handleInputChanged = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    }

    const addTodo = () => {
        setTodos([...todos, todo]);
    }

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Todo list</h1>

            <input
                type="date"
                name="date"
                value={todo.date}
                onChange={handleInputChanged}
            />

            <input
                type="text"
                name="description"
                value={todo.description}
                onChange={handleInputChanged}
            />

            <button onClick={addTodo}>
                Add
            </button>

            <TodoTable todos={todos} handleDelete={handleDelete} />
        </div>
    )
}
