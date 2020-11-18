import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import style from './TodoTemplate.module.css';
const TodoTemplate = ({ todo, onCreate, onRemove, onToggle }) => {
  return (
    <div className={style.todoMain}>
      <div className={style.title}> 일정관리 </div>
      <TodoInsert onCreate={onCreate} />
      <TodoList todo={todo} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export default TodoTemplate;
