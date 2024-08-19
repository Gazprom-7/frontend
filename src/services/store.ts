import { configureStore } from '@reduxjs/toolkit'
import { employeeReducer } from './slices/employeeSlice'
import { projectsReducer } from 'src/services/slices/projectsSlice'

export const store = configureStore({
  reducer: { projects: projectsReducer, employee: employeeReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
