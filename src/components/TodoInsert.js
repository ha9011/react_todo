import React, { useState, useRef } from 'react';
import style from './TodoInsert.module.css';
import { MdAdd } from 'react-icons/md';
const TodoInsert = ({ onCreate }) => {
  const [text, setText] = useState('');
  const onChagne = (e) => {
    setText(e.target.value);
  };
  const inputFocus = useRef();
  return (
    <div className={style.insertDiv}>
      <input
        ref={inputFocus}
        className={style.insertInput}
        placeholder="할 일을 입력하세요"
        onChange={onChagne}
        value={text}
      ></input>
      <button
        className={style.insertBtn}
        onClick={() => {
          onCreate(text);
          setText('');
        }}
      >
        <MdAdd />
      </button>
    </div>
  );
};

export default TodoInsert;
