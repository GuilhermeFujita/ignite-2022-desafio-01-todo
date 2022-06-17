import { PlusCircle, Trash } from 'phosphor-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './Todos.module.css';

interface Todo {
  id: string;
  content: string;
  isDone: boolean;
}

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);
  const [newTodo, setNewTodo] = useState('');

  function handleDeleteTodo(todoId: string) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault();

    if (newTodo.trim() === '') return;

    const createdTodo = {
      id: uuid(),
      content: newTodo,
      isDone: false,
    };

    setTodos([...todos, createdTodo]);
    setNewTodo('');
  }

  function handleTodoIsDone(todoId: string) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === todoId) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  useEffect(() => {
    setTotalTasks(todos.length);
    setDoneTasks(todos.filter((todo) => todo.isDone).length);
  }, [todos]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateTodo}>
        <div className={styles.todoInput}>
          <input
            type='text'
            name='newTodo'
            placeholder='Adicione uma tarefa'
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          <button type='submit' disabled={newTodo.length === 0}>
            Criar
            <PlusCircle />
          </button>
        </div>
      </form>

      <div className={styles.todoList}>
        <div className={styles.todoListTitle}>
          <h4 className={styles.tasksCreatedTitle}>
            Tarefas criadas {totalTasks}
          </h4>
          <h4 className={styles.tasksFinishedTitle}>
            Concluidas
            <span>
              {doneTasks} de {totalTasks}
            </span>
          </h4>
        </div>
        <div>
          {todos.map((todo) => {
            return (
              <div className={styles.todo} key={todo.id}>
                <div
                  className={
                    todo.isDone ? styles.todoCompleted : styles.todoBody
                  }
                >
                  <input
                    type='checkbox'
                    checked={todo.isDone}
                    onClick={() => handleTodoIsDone(todo.id)}
                  />
                  <p>{todo.content}</p>
                </div>
                <Trash onClick={() => handleDeleteTodo(todo.id)} size={24} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
