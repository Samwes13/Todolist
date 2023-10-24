import React, { useState, useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TodoTable from "./components/TodolistTable";
import DateComponent from "./components/DateComponent";





export default function Todolist() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: "", date: "", priority: '' });
    const gridRef = useRef(null); 

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
   
    const handleDateChange = (date) => {
        const formattedDate = (date).format('MM/DD/YYYY');
                setTodo({ ...todo, date: formattedDate });
    }

    return (
        <div>
            <h1>Todo list</h1>
            
            <DateComponent date={todo.date} setDate={handleDateChange}  />

             
             <TextField
                id="inputDescription"
                label="Description"
                variant="standard"
                name="description"
                value={todo.description}
                onChange={handleInputChanged}
            />

            <TextField
                id="inputPriority"
                label="Priority"
                variant="standard"
                name="priority"
                value={todo.priority}
                onChange={handleInputChanged}
            />
            

            <Button onClick={addTodo}
            variant="contained">
                Add
            </Button>
            <Button onClick={handleDelete}
            variant="contained" color="error">
                Delete
            </Button>
            <TodoTable todos={todos} gridRef={gridRef} />
        
        </div>
    )
}
