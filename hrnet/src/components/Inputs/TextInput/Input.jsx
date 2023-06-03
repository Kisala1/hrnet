import styles from '../Inputs.module.scss'

export function Input({ id, name, error }) {
  return (
    <>
      {error ? (
        <>
          <input type={'text'} id={id} name={name} />
          <p className={styles.error} >{error}</p>
        </>
      ) : (
        <input type={'text'} id={id} name={name} />
      )}
    </>
  );
}
