import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  deleteTodo } from '../store/TodoSlice';
import styled from 'styled-components';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  
  const dispatch = useDispatch();
 console.log(todos);
 
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <Div key={id}>
          <span >
            {text}
          </span>
          <Button onClick={() => dispatch(deleteTodo(id))}>Delete</Button>
        </Div>
      ))}
    </ul>
  );
};
const Button = styled.button`
background-color:gold;
border-radius: 5px;
`
const Div = styled.div`
border-radius: 10px;
background-color: grey;
width: 35%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
height: 30px;
padding: 5px 10px;
`

export default TodoList;
