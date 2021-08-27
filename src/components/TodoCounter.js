import React from 'react';

import { TodoContext } from './TodoContext';

import './styles/TodoCounter.css';

function TodoCounter() {

  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  if(totalTodos === 0) {
    return <h2 className="TodoCounter">No has agregado ningún TODO</h2>
  }
  
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
};

export { TodoCounter };

