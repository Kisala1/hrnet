import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Modal({ closeModal }) {
  const [showModal, setShowModal] = useState(true);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
      closeModal();
    }
  };
  return (
    <>
      {showModal && (
        <div className={styles.containerModal} onClick={handleClickOutside}>
          <div className={styles.modal}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={styles.closeModal}
              onClick={() => {
                setShowModal(false);
                closeModal();
              }}
            />
            <div className={styles.content}>
              <span>Employee Created !</span>
              <Link className={styles.link} to={'/employeeslist'}>
                View Current Employees
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
