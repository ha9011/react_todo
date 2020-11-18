import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todo, onRemove, onToggle }) => {
  return (
    <div>
      {todo.map((item) => (
        <TodoListItem
          key={item.id}
          content={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
