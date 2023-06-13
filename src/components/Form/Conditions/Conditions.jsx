// import styles from './Conditions.module.scss';

export function renderErrorMessage(formData) {
  const errors = {};

  const inputRegExp = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF '-]+$/;

  const errorEmpty = 'The field cannot be empty.';
  const errorMoreCharac = 'Please enter 2 or more characters.';
  const errorLessCharac = 'Please enter 25 characters or less.';
  const errorOnlyLetters = 'Please enter only letters, apostrophes or dashes.';

  /* Error for input FirstName */
  if (!formData.FirstName || formData.FirstName.trim().length === 0) {
    errors['FirstName'] = errorEmpty;
  }
  if (formData.FirstName) {
    if (formData.FirstName.length < 2) {
      errors['FirstName'] = errorMoreCharac;
    }
    if (formData.FirstName.length > 25) {
      errors['FirstName'] = errorLessCharac;
    }
    if (!inputRegExp.test(formData.FirstName)) {
      errors['FirstName'] = errorOnlyLetters;
    }
  }

  /* Error for input LastName */
  if (!formData.LastName || formData.LastName.trim().length === 0) {
    errors['LastName'] = errorEmpty;
  }
  if (formData.LastName) {
    if (formData.LastName.length < 2) {
      errors['LastName'] = errorMoreCharac;
    }
    if (formData.LastName.length > 25) {
      errors['LastName'] = errorLessCharac;
    }
    if (!inputRegExp.test(formData.LastName)) {
      errors['LastName'] = errorOnlyLetters;
    }
  }

  /* Error for input DateofBirth */
  if (!formData.DateofBirth || formData.DateofBirth.trim().length === 0) {
    errors['DateofBirth'] = errorEmpty;
  }

  /* Error for input StartDate */

  if (!formData.StartDate || formData.StartDate.trim().length === 0) {
    errors['StartDate'] = errorEmpty;
  }

  /* Error for input Street */

  if (!formData.Street || formData.Street.trim().length === 0) {
    errors['Street'] = errorEmpty;
  }
  if (formData.Street) {
    if (formData.Street.length < 2) {
      errors['Street'] = errorMoreCharac;
    }
    if (formData.Street.length > 25) {
      errors['Street'] = errorLessCharac;
    }
  }

  /* Error for input City */

  if (!formData.City || formData.City.trim().length === 0) {
    errors['City'] = errorEmpty;
  }
  if (formData.City) {
    if (formData.City.length < 2) {
      errors['City'] = errorMoreCharac;
    }
    if (formData.City.length > 25) {
      errors['City'] = errorLessCharac;
    }
    if (!inputRegExp.test(formData.City)) {
      errors['City'] = errorOnlyLetters;
    }
  }

  /* Error for input ZipCode */

  if (!formData.ZipCode || formData.ZipCode.trim().length === 0) {
    errors['ZipCode'] = errorEmpty;
  }

  if (!formData.ZipCode || formData.ZipCode === '') {
    errors['ZipCode'] = errorEmpty;
  }

  return errors;
}
