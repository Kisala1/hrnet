import styles from './Pagination.module.scss';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    // Définir la marge de pages à afficher de chaque côté de la page courante
    const delta = 2;
    // Calculer les bornes gauche et droite de la marge
    const left = currentPage - delta;
    const right = currentPage + delta + 1;
    let range = [];
    let rangeWithDots = [];
    const l = [];

    // Boucler sur toutes les pages et ajouter celles qui doivent être affichées à la liste "range"
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        range.push(i);
      }
    }
    
    // Boucler sur les pages de la liste "range" et ajouter des points de suspension entre les pages distantes de plus d'une unité
    for (let i of range) {
      if (l.length && i - l[l.length - 1] !== 1) {
        rangeWithDots.push('...');
      }
      l.push(i);
      rangeWithDots.push(i);
    }

    return rangeWithDots;
  };

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.pageNumber} ${
          currentPage === 1 ? styles.disabled : ''
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {getPageNumbers().map((pageNumber, index) => {
        if (pageNumber === '...') {
          return (
            <span key={index} className={styles.dots}>
              {pageNumber}
            </span>
          );
        }
        return (
          <button
            key={index}
            className={`${styles.pageNumber} ${
              currentPage === pageNumber ? styles.active : ''
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={`${styles.pageNumber} ${
          currentPage === totalPages ? styles.disabled : ''
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
