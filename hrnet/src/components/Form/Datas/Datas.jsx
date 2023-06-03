function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${month}/${day}/${year}`;
}

export function Datas() {
  const firstName = document.getElementById('FirstName').value;
  const lastName = document.getElementById('LastName').value;
  const dateBirth = formatDate(document.getElementById('DateofBirth').value);
  const startDate = formatDate(document.getElementById('StartDate').value);
  const street = document.getElementById('Street').value;
  const city = document.getElementById('City').value;
  const states = document.getElementById('States').value;
  const zipCode = document.getElementById('ZipCode').value;
  const department = document.getElementById('Department').value;

  const data = JSON.stringify({
    firstName,
    lastName,
    dateBirth,
    startDate,
    street,
    city,
    states,
    zipCode,
    department,
  });

  return data;
}
