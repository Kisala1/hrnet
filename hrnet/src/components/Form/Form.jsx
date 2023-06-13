import { Input } from '../Inputs/TextInput/Input';
import { DateInput } from '../Inputs/DateInput/DateInput';
import { NumberInput } from '../Inputs/NumberInput/NumberInput';
import { Button } from '../Button/Button';
import { DropDown } from '../Dropdown/Dropdown';
import { Modal } from '../Modal/Modal';
import departments from '../../data/departments.json';
import states from '../../data/states.json';
import styles from './Form.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Datas } from './Datas/Datas';
import { createLocalStorage } from '../../feature/localStorageReducer';
import { renderErrorMessage } from './Conditions/Conditions';

export function Form({ textInputs, dateInputs, adressInputs }) {
  /* TODO faire en sorte que quand il y a une erreur sur un input n'efface pas leur contenu*/
  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  // const test = textInputs
  //   .map((el) => el.split(' ').join(''))
  //   .map((elm, index) => (
  //     <div key={index}>
  //       <label>{elm}</label>
  //       <Input id={elm} name={elm} error={formErrors[elm]} />
  //     </div>
  //   ));
  // console.log(test);
  // console.log(textInputs);

  // const test1 = textInputs.map((name) => ({ name }));
  // // .map((el) => el.split(' ').join(''));
  // console.log(test1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errors = renderErrorMessage({
      FirstName: formData.get('FirstName'),
      LastName: formData.get('LastName'),
      DateofBirth: formData.get('DateofBirth'),
      StartDate: formData.get('StartDate'),
      Street: formData.get('Street'),
      City: formData.get('City'),
      ZipCode: formData.get('ZipCode'),
    });
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowModal(true);
      dispatch(createLocalStorage(Datas()));
    } else {
      alert("Formulaire non envoyé en raison d'erreurs.");
    }
  };

  const renderForm = (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div>
        {/* {textInputs
          .map((el) => el.split(' ').join(''))
          .map((elm, index) => (
            <div key={index} className={styles.blocInput}>
              <label key={index}>{elm}</label>
              <Input id={elm} name={elm} error={formErrors[elm]} />
            </div>
          ))}*/}
          
        {textInputs.map((el, index) => {
          const elm = el.split(' ').join('');
          return (
            <div key={index} className={styles.blocInput}>
              <label key={index}>{el}</label>
              <Input id={elm} name={elm} error={formErrors[elm]} />
            </div>
          );
        })}
      </div>
      <div>
        {dateInputs.map((el, index) => {
          const elm = el.split(' ').join('');
          return (
            <div key={index} className={styles.blocInput}>
              <label key={index}>{el}</label>
              <DateInput id={elm} name={elm} error={formErrors[elm]} />
            </div>
          );
        })}
      </div>
      <fieldset className={styles.containerAdressInputs}>
        <legend className={styles.legend}>Adress</legend>
        {adressInputs.map((el, index) => {
          const elm = el.split(' ').join('');
          return (
            <div key={index} className={styles.blocInput}>
              <label key={index}>{el}</label>
              <Input id={elm} name={elm} error={formErrors[elm]} />
            </div>
          );
        })}
        <DropDown name={'States'} options={states.States} />
        <div className={styles.blocInput}>
          <label>Zip Code</label>
          <NumberInput
            id={'ZipCode'}
            name={'ZipCode'}
            error={formErrors['ZipCode']}
          />
        </div>
      </fieldset>
      <div className={styles.dropdownDepartments}>
        <DropDown name={'Department'} options={departments.Departments} />
      </div>
      <Button type="submit" content="Save" />
    </form>
  );
  return (
    <>
      {showModal ? (
        <>
          {renderForm}
          <Modal closeModal={() => setShowModal(false)} />
        </>
      ) : (
        renderForm
      )}
    </>
  );
}
