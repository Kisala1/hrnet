import styles from './Button.module.scss';

export function Button({ content }) {
  return (
    <button type="submit" className={styles.btn}>
      {content}
    </button>
  );
}
