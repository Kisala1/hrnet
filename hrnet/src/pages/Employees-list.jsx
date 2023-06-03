import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { Table } from '../components/Table/Table';
import styles from './style/Employees-list.module.scss';

export function EmployeesList() {
  const employeesData = localStorage.getItem('employees');
  const employeeData = JSON.parse(employeesData);

  const sortDatas = [
    {
      sortKey: 'firstName',
      content: 'First Name',
    },
    {
      sortKey: 'lastName',
      content: 'Last Name',
    },
    {
      sortKey: 'startDate',
      content: 'Start Date',
    },
    {
      sortKey: 'department',
      content: 'Department',
    },
    {
      sortKey: 'dateBirth',
      content: 'Date of Birth',
    },
    {
      sortKey: 'street',
      content: 'Street',
    },
    {
      sortKey: 'city',
      content: 'City',
    },
    {
      sortKey: 'states',
      content: 'State',
    },
    {
      sortKey: 'zipCode',
      content: 'Zip Code',
    },
  ];
  return (
    <MainLayout viewEmployees={true}>
      <div className={styles.container}>
        <div className={styles.containerTable}>
          {employeeData ? (
            <Table datas={employeeData} sortDatas={sortDatas} />
          ) : (
            <Table />
          )}
        </div>
        <Link to={'/'} className={styles.link}>
          Home
        </Link>
      </div>
    </MainLayout>
  );
}
