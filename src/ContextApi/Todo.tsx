import * as React from 'react';
import { ITodo } from '../Todo.types';

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : '';
  console.log(todo.status)
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>{
        todo.status== false &&
        <button onClick={() => updateTodo(todo.id)} >
        Complete
      </button>

      }
      
    </div>
  );
};
export default Todo;