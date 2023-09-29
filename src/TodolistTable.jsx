import React from 'react';

const TodolistTable = ({ todos, handleDelete }) => {
    const itemRows = todos.map((todo, index) =>
        <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.description}</td>
            <td><button onClick={() => handleDelete(index)}>Delete</button></td>
        </tr>
    );

    return (
        <table>
            <tbody>
                {itemRows}
            </tbody>
        </table>
    );
}

export default TodolistTable;
