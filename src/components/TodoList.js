import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle, onRevising, onChange})=>{
    return (
        <div className="TodoList">
            {todos.map(todo=>{
                return <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} onRevising={onRevising} onChange={onChange}/>
            })}
        </div>
    );
};

export default TodoList;