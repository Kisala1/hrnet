import styles from './Showing.module.scss';

export function Showing({
  datas,
  filteredDataByPage,
  currentPage,
  numEntries,
}) {
  const totalNumEntries = () => {
    do {
      return numEntries * currentPage;
    } while (currentPage > 1);
  };
  return (
    <p className={styles.numberEntries}>
      Showing {datas ? datas.indexOf(filteredDataByPage[1]) : 0} to{' '}
      {currentPage === 1 ? numEntries : totalNumEntries()} of{' '}
      {datas ? datas.length : 0} entries
    </p>
  );
}
