import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../features/employeeSlice';
const store = configureStore({
  reducer: {
    // Add your slice reducers here
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
