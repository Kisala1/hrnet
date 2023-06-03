import styles from '../Inputs.module.scss';

export function DateInput({ id, name, error }) {
  return (
    <>
      {error ? (
        <>
          <input type={'date'} id={id} name={name} />
          <p className={styles.error}>{error}</p>
        </>
      ) : (
        <input type={'date'} id={id} name={name} />
      )}
    </>
  );
}
