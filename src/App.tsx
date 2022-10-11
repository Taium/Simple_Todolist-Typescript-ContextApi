import React from 'react';
import logo from './logo.svg';
import './App.css';
import Function from './Function';
import TodoProvider from './ContextApi/TodoContext';
import AddTodo from './ContextApi/AddTodo';
import Todos from './ContextApi/Todos';


function App() {
  // const sum = (a: number, b: number) => {
  //   return a + b;
  // };

  // const logMessage = (message: string) => {
  //   console.log(message);
  // };

  // const doSomething = () => {
  //   console.log('Something');
  // }
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log('element clicked');
  // };
  return (
    <TodoProvider >
      <main className='App'>
        <h1>My Todos</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider>
     
     

  );
}

export default App;
