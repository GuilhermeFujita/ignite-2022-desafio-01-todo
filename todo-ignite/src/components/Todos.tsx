import { PlusCircle, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';

import styles from './Todos.module.css';

interface Todo {
  id: string;
  content: string;
  isDone: boolean;
}

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', content: 'Learn TypeScript', isDone: false },
    { id: '2', content: 'Teste', isDone: false },
  ]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);

  function handleDeleteTodo(todoId: string) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  useEffect(() => {
    setTotalTasks(todos.length);
    setDoneTasks(todos.filter((todo) => todo.isDone).length);
  }, [todos]);

  return (
    <div className={styles.container}>
      <div className={styles.todoInput}>
        <input type='text' placeholder='Adicione uma tarefa' />
        <button>
          Criar
          <PlusCircle />
        </button>
      </div>

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
                <div className={styles.todoBody}>
                  <input type='checkbox' />
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
