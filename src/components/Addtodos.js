import React, { useState } from 'react';

const Addtodos = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and Description can't be blank!");
            return;
        }
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    };

    return (
        <div className="container my-3">
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input
                        type="text"
                        value={title}
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input
                        type="text"
                        value={desc}
                        className="form-control"
                        onChange={(e) => setDesc(e.target.value)}
                        id="desc"
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-outline-success">Add</button>
            </form>
        </div>
    );
};

export default Addtodos;
