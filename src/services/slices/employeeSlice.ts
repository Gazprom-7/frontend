import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootStore } from 'src/services/store'
import { getEmployeeCardsData } from 'src/services/api'
import type { EmployeeCardType, EmployeeType } from 'src/utils/types'
import { initialEmployeeTree } from 'src/services/constants'
import { mockEmployeesData } from 'src/utils/mock/mockEmployeesData'

interface StateType {
  employee: EmployeeCardType
  employeeById: EmployeeType
  isInfoOpen: boolean
  isLoading: boolean
  error: string | null | unknown
}

const initialState: StateType = {
  employee: initialEmployeeTree,
  employeeById: mockEmployeesData[3],
  isInfoOpen: false,
  isLoading: false,
  error: null
}

export const fetchEmployeeCardsData = createAsyncThunk('fetch/employee', getEmployeeCardsData)

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    openInfo: state => {
      state.isInfoOpen = true
    },
    closeInfo: state => {
      state.isInfoOpen = false
    }
  },
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

export const { openInfo, closeInfo } = employeeSlice.actions

export const employeeReducer = employeeSlice.reducer;
export const selectEmployee = (state: RootStore) => state.employee
