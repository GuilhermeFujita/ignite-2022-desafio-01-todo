import { PlusCircle } from 'phosphor-react';

import styles from './Todos.module.css';

export function Todos() {
  return (
    <div className={styles.todoInput}>
      <input type='text' placeholder='Adicione uma tarefa' />
      <button>
        Criar
        <PlusCircle />
      </button>
    </div>
  );
}
