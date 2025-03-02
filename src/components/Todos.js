import React from 'react';
import TodoItems from './TodoItems';

const Todos = (props) => {
    return (
        <div className="flex justify-start p-4">
            <h3 className="text-center my-3 w-full">Todos List...</h3>
            {props.todos.map((todo) => {
                return (
                    <TodoItems key={todo.sr} todo={todo} onDelete={props.onDelete} />
                )
            })}
        </div>
    );
};

export default Todos;
