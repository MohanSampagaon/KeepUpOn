import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Employee {
  motivation: string;
  personal: string;
  employeeName: string;
  performanceRating: string;
  previousEWSRating: string;
  mentalHealth: string;
  projectHealth: string;
  career: string;
  talentType: string;
  currentRating: number;
  managerRating: number;
  trigger: string;
}

const initialState: Employee[] = [];

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.findIndex((employee) => employee.employeeName === action.payload.employeeName);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});
export const employeesSelector = (state: { employees: Employee[] }) => state.employees;
export const { addEmployee, updateEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;