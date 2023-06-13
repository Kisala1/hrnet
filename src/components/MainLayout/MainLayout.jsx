import { Header } from '../Header/Header';
import styles from './MainLayout.module.scss';

export function MainLayout({ children, viewEmployees }) {
  return (
    <div className={styles.container}>
      <Header viewEmployees={viewEmployees} />
      {children}
    </div>
  );
}
