import styles from './Show.module.scss';

export function Show({numEntries, setNumEntries,handleNumEntriesChange}) {
  const optionValues = ['10', '25', '50', '100'];


  return (
    <div className={styles.dropDownValueEntries}>
      <label htmlFor="num-entries">Show</label>
      <select
        id="num-entries"
        value={numEntries}
        onChange={handleNumEntriesChange}
      >
        {optionValues.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <p>entries</p>
    </div>
  );
}
