import { Header } from './components/Header';

import styles from './/App.module.css';
import './global.css';
import { InputTodo } from './components/InputTodo';

export function App() {
  return (
    <div className='App'>
      <Header />
      <div className={styles.wrapper}>
        <InputTodo />
      </div>
    </div>
  );
}
