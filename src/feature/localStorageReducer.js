import { createSlice } from '@reduxjs/toolkit';

const localStorageSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
  },
  reducers: {
    createLocalStorage: (state, { payload }) => {
      let employees = JSON.parse(localStorage.getItem('employees')) || [];
      employees = employees.length ? employees : [];
      employees.push(payload);
      localStorage.setItem('employees', JSON.stringify(employees));
      state.data = employees;
    },
  },
});

export const { createLocalStorage, employeesDatas } = localStorageSlice.actions;
export default localStorageSlice.reducer;
