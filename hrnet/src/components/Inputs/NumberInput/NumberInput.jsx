import styles from '../Inputs.module.scss';

export function NumberInput({ id, name, error }) {
  return (
    <>
      {error ? (
        <>
          <input type={'number'} id={id} name={name} />
          <p className={styles.error}>{error}</p>
        </>
      ) : (
        <input type={'number'} id={id} name={name} />
      )}
    </>
  );
}
