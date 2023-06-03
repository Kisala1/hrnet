import { Sort } from './Sort/Sort';
import { Show } from './Show/Show';
import { Search } from './Search/Search';
import { Pagination } from './Pagination/Pagination';
import { useEffect, useState } from 'react';
import styles from './Table.module.scss';

const parseData = (data) => JSON.parse(data);

export function Table({ datas, sortDatas }) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('none');
  const [numEntries, setNumEntries] = useState(10);
  const [filteredData, setFilteredData] = useState(datas);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    handleNumEntriesChange({ target: { value: numEntries } });
  });

  // Fonction de gestionnaire d'événements pour le changement du nombre d'entrées à afficher par page
  const handleNumEntriesChange = (event) => {
    // Mettre à jour le nombre d'entrées par page
    setNumEntries(parseInt(event.target.value));
    // Mettre à jour le nombre total de pages en fonction
    // du nombre d'entrées par page et du nombre de données filtrées
    setTotalPages(
      Math.ceil(filteredData.length / parseInt(event.target.value))
    );
  };

  // Fonction de gestionnaire d'événements pour la recherche de données
  const handleSearch = (data) => {
    // Mettre à jour les données filtrées
    setFilteredData(data);
    // Mettre à jour le nombre total de pages en fonction
    // du nombre d'entrées par page et du nombre de données filtrées
    setTotalPages(Math.ceil(data.length / numEntries));
    // Revenir à la première page
    setCurrentPage(1);
  };

  // Fonction de gestionnaire d'événements pour le tri des données
  const handleSort = (key, direction) => {
    // Mettre à jour la clé de tri sélectionnée
    setSortKey(key);
    // Mettre à jour la direction de tri sélectionnée
    setSortDirection(direction);
    // Revenir à la première page
    setCurrentPage(1);
  };

  // Filtre datas en fonction de la page actuelle et du nombre d'entrées par page
  const filterDataByPage = (data) => {
    const startIndex = (currentPage - 1) * numEntries;
    const endIndex = startIndex + numEntries;
    return data.slice(startIndex, endIndex);
  };

  // Données filtrées en fonction de la page courante
  const filteredDataByPage = filteredData
    ? // filteredDataByPage contiendra uniquement les données filtrées de la page actuelle
      filterDataByPage(filteredData)
    : // contiendra les données triées de la page actuelle (sans filtre appliqué) si filterData n'existe pas
      filteredData && filterDataByPage();

  const renderTbody = (datas) => {
    if (datas) {
      if (filteredData) {
        return (
          <tbody className={styles.tbodyData}>
            {filteredDataByPage
              .map((data, index) => {
                const employee = parseData(data);
                return (
                  <tr key={index} className={styles.rowData}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.dateBirth}</td>
                    <td>{employee.street}</td>
                    <td>{employee.city}</td>
                    <td>{employee.states}</td>
                    <td>{employee.zipCode}</td>
                  </tr>
                );
              })
              .slice()
              .sort((a, b) => {
                let employeeA = a[sortKey];
                let employeeB = b[sortKey];

                // TODO appliquer le tri par firstname directement sur la page + modifier la condition
                // TODO Faire en sorte que la flèche précédente disparaisse après avoir appuyé sur un autre élément pour trier
                if (employeeA < employeeB) {
                  return sortDirection === 'descending' ? -1 : 1;
                }
                return sortDirection === 'ascending' ? 1 : -1;
              })
              .slice(0, numEntries)}
          </tbody>
        );
      }
    } else {
      return (
        <tbody>
          <tr>
            <td colSpan={9} className={styles.tdNoData}>
              No data available in table
            </td>
          </tr>
        </tbody>
      );
    }
  };

  return (
    <>
      <div className={styles.containerSearch}>
        <Show
          numEntries={numEntries}
          setNumEntries={setNumEntries}
          handleNumEntriesChange={handleNumEntriesChange}
        />
        <Search datas={datas} onSearch={handleSearch} />
      </div>
      <table>
        <thead>
          <tr className={styles.headersName}>
            {sortDatas.map((sortData, index) => (
              <Sort key={index} sortKey={sortData.sortKey} onSort={handleSort}>
                {sortData.content}
              </Sort>
            ))}
          </tr>
        </thead>
        {renderTbody(datas)}
      </table>
      <div className={styles.containerShowingBtn}>
        <p className={styles.numberEntries}>
          {/* TODO Showing {datas ? datas.length : 0} => datas.length incorrect doit afficher le chiffre de la 1ere entries  
          ex : Showing 1 to 10 of 16 (page 1) ; Showing 11 to 10 of 16 (page 2) */}
          Showing {datas ? datas.length : 0} to {numEntries} of{' '}
          {datas ? datas.length : 0} entries
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
