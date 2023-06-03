import { useState } from 'react';

export function Sort({ children, sortKey, onSort }) {
  const [sortDirection, setSortDirection] = useState('none');

  const handleClick = () => {
    let newDirection;
    switch (sortDirection) {
      case 'ascending':
        newDirection = 'descending';
        break;
      case 'descending':
        newDirection = 'ascending';
        break;
      default:
        newDirection = 'ascending';
    }
    setSortDirection(newDirection);
    onSort(sortKey, newDirection);
  };

  const getSortIcon = () => {
    switch (sortDirection) {
      case 'ascending':
        return '▲';
      case 'descending':
        return '▼';
      default:
        return '';
    }
  };

  return (
    <th onClick={handleClick}>
      {children}
      {getSortIcon()}
    </th>
  );
}
