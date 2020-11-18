import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import style from './TodoListItem.module.css';
const TodoListItem = ({ content, onRemove, onToggle }) => {
  return (
    <div className={style.TodoItem}>
      <div className={style.content}>
        <div
          onClick={() => {
            onToggle(content.id);
          }}
          className={content.check ? style.check : style.nocheck}
        >
          {content.check ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
        <div className={content.check ? style.doTodo : style.todo}>
          {content.text}
        </div>
      </div>

      <div
        className={style.remove}
        onClick={() => {
          onRemove(content.id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
