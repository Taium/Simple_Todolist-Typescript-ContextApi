import * as React from 'react';
import { ITodo, TodoContextType } from '../Todo.types';
import Todo from './Todo';
import { TodoContext } from './TodoContext';


const Todos = () => {
  const { todos, updateTodo , clear } = React.useContext(TodoContext) as TodoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
      {
        todos[0] &&
        <button onClick={clear}>clear all</button>
      }
    </>
  );
};

export default Todos