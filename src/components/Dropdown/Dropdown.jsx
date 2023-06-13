import styles from './Dropdown.module.scss';

export function DropDown({ name, options }) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>{name}</label>
      <select name={name} id={name} className={styles.select}>
        {options.map((option, index) => {
          return <option key={index}>{option.name}</option>;
        })}
      </select>
    </div>
  );
}
