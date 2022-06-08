import { Header } from './components/Header';

import styles from './/App.module.css';
import './global.css';

export function App() {
  return (
    <div className='App'>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.wrapper}></div>
    </div>
  );
}
