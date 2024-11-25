import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/TodoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddBtn = (e) => {
    e.preventDefault();
    if (text !=="") {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите запрос"
      />
      <button onClick={handleAddBtn}>Add</button>
    </form>
  );
};

export default AddTodo;
