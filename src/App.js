import './App.css';
import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import produce from 'immer';

window.produce = produce;
function testBult() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      check: false,
    });
  }
  return array;
}

// [
//   { id: 1, text: '리액트의 기초 알아보기', check: true },
//   { id: 2, text: '컴포넌트 스타일링 해보기', check: false },
//   { id: 3, text: 'TODO 만들어 보기', check: true },
// ]
function App() {
  const [todo, setTodo] = useState(testBult);

  const nextId = useRef(4);
  const onCreate = useCallback((text) => {
    const newTodo = {
      id: nextId.current,
      text: text,
      check: false,
    };
    setTodo((todo) => todo.concat(newTodo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((key) => {
    setTodo((todo) => todo.filter((item) => item.id !== key));
  }, []);

  const onToggle = useCallback((key) => {
    setTodo((todo) =>
      todo.map((item) =>
        item.id === key ? { ...item, check: !item.check } : item,
      ),
    );
  }, []);

  return (
    <TodoTemplate
      todo={todo}
      onCreate={onCreate}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  );
}

export default App;
