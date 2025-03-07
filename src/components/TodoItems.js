import React from 'react'

const TodoItems = ({ todo, onDelete }) => {
    return (
        <div className="card p-3 shadow-sm">
            <h4 className="title">{todo.sr}</h4>
            <h5 className="subtitle mb-2">{todo.title}</h5>
            <p className="text">{todo.desc}</p>

            <button className="btn btn-outline-danger mt-2 my-2 " style={{ padding: '5px', fontSize: '15px', width:"250px" }} onClick={() => {
                onDelete(todo)
            }}>
                Delete
            </button>

            
        </div>

    )
}

export default TodoItems