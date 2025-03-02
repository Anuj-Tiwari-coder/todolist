import React from 'react'

const TodoItems = ({ todo, onDelete }) => {
    return (
        <div className="card p-3 shadow-sm">
            <h4 className="title">{todo.sr}</h4>
            <h5 className="subtitle mb-2">{todo.Title}</h5>
            <p className="text">{todo.Description}</p>
            <span className={`badge ${todo.completed ? 'bg-success' : 'bg-danger'}`} style={{ padding: '5px 15px', margin: '1px', fontSize: '12px' }}>
                {todo.completed ? 'Completed ✅' : 'Pending ❌'}
            </span>
            <button className="btn btn-danger mt-2 my-2 " style={{ padding: '5px', fontSize: '15px' }} onClick={onDelete}>
                Delete
            </button>

        </div>

    )
}

export default TodoItems