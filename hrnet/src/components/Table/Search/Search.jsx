import { useState } from 'react';
import styles from './Search.module.scss';

export function Search({ datas, onSearch }) {
  const [searchInput, setSearchInput] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (e.target.value.length > 1) {
      const filteredData = datas.filter((data) => {
        return data.match(e.target.value);
      });
      onSearch(filteredData);
    } else {
      onSearch(datas);
    }
  };
  return (
    <div>
      <label className={styles.label} htmlFor="search">
        Search :
      </label>
      <input
        type="text"
        id="search"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}
