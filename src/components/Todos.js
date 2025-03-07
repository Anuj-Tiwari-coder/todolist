import React from 'react';
import TodoItems from './TodoItems';

const Todos = (props) => {
    const mystyle = {
        minHeight: "70h",
        margin: "10px auto",

    }
    return (
        <div className="flex justify-start p-4 my-3" style={mystyle}>
            <h3 className="text-center my-3 ">Todos List...</h3>
            {props.todos.length === 0 ? "No Todos is display" :
                props.todos.map((todo) => {
                    return (
                        <>
                            <TodoItems key={todo.sr} todo={todo} onDelete={props.onDelete} /> <hr />
                        </>
                    )
                })}
        </div>
    );
};

export default Todos;
