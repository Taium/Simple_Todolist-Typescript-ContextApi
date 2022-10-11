import React from 'react';

interface ButtonProps {
    sum: (a: number, b: number) => number;
    logMessage: (message: string) => void;
    handleClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void
  
    // 👇️ turn off type checking
    doSomething: (params: any) => any;
  }
const Function = ({sum,logMessage,handleClick,doSomething}:ButtonProps) => {
    console.log(sum(10, 15));

    logMessage('hello world');
  
    
    return (
        <div>
            <button onClick={handleClick}>  click</button>
            This is child components
        </div>
    );
};

export default Function;