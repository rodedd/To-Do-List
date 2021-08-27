import React from 'react';

import { TodoContext } from './components/TodoContext';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoForm } from './components/TodoForm';
import { Modal } from './components/Modal';
import { EmptyTodos } from './components/EmptyTodos';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
        <TodoList>
          {error && <TodosError error={error} />}
          {loading && new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
          {(!loading && !searchedTodos.length) && <EmptyTodos />} 
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };