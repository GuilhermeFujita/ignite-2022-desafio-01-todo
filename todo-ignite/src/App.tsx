import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';
import { Todos } from './components/Todos';

export function App() {
  return (
    <div className='App'>
      <Header />
      <div className={styles.wrapper}>
        <Todos />
      </div>
    </div>
  );
}
