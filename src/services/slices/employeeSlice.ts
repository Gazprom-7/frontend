import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootStore } from 'src/services/store'
import { getEmployeeCardsData } from 'src/services/api'
import type { EmployeeCardType } from 'src/utils/types'
import { initialEmployeeTree } from 'src/services/constants'

interface StateType {
  employee: EmployeeCardType
  isLoading: boolean
  error: string | null | unknown
}

const initialState: StateType = {
  employee: initialEmployeeTree,
  isLoading: false,
  error: null
}

export const fetchEmployeeCardsData = createAsyncThunk('fetch/employee', getEmployeeCardsData)

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchEmployeeCardsData.pending, state => {
      state.isLoading = true
    })
    .addCase(fetchEmployeeCardsData.fulfilled, (state, action) => {
      state.employee = action.payload
      state.isLoading = false
      state.error = null
    })
    .addCase(fetchEmployeeCardsData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
}
})

export const employeeReducer = employeeSlice.reducer;
export const selectEmployee = (state: RootStore) => state.employee
