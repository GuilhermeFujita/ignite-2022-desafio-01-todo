import { PlusCircle } from 'phosphor-react';

import styles from './InputTodo.module.css';

export function InputTodo() {
  return (
    <div className={styles.wrapper}>
      <input type='text' placeholder='Adicione uma tarefa' />
      <button>
        Criar
        <PlusCircle />
      </button>
    </div>
  );
}
