import React, { useState, useRef } from "react";
import TodoTable from "./TodolistTable";

export default function Todolist() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: "", date: "", priority: '' });
    const gridRef = useRef(null); // Lisätty gridRef

    const handleInputChanged = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    }

    const addTodo = () => {
        setTodos([...todos, todo]);
    }

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
            index != gridRef.current.getSelectedNodes()[0].id))
            }
            else {
            alert('Select row first');
            }
            };
  

    return (
        <div>
            <h1>Todo list</h1>
            
            <input
                id="inputdate"
                type="date"
                name="date"
                placeholder="Date"
                value={todo.date}
                onChange={handleInputChanged}
            />
            
            <input
                id="inputDescription"
                placeholder="Task"
                type="text"
                name="description"
                value={todo.description}
                onChange={handleInputChanged}
            />

            <input
                id="inputPriority"
                placeholder="Priority"
                type="text"
                name="priority"
                value={todo.priority}
                onChange={handleInputChanged}
            />
            

            <button onClick={addTodo}>
                Add
            </button>
            <button onClick={handleDelete}>
                Delete
            </button>
            <TodoTable todos={todos} gridRef={gridRef} />
          
        </div>
    )
}
