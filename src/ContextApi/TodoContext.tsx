import * as React from 'react';
import { ITodo, TodoContextType } from '../Todo.types';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode | any> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
  
   
  ]);
  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), 
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
        console.log(todos);
      }
    });
  };
  const clear=()=>{
    setTodos([]);
  }
  return <TodoContext.Provider value={{ todos, saveTodo, updateTodo,clear }}>
    {children}
    </TodoContext.Provider>;
};

export default TodoProvider;