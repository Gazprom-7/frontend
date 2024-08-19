import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootStore } from 'src/services/store'
import { getProjectCardsData } from 'src/services/api'
import type { ProjectCardType } from 'src/utils/types'

interface StateType {
  projects: ProjectCardType[]
  isLoading: boolean
  error: string | null | unknown
}

const initialState: StateType = {
  projects: [],
  isLoading: false,
  error: null
}

export const fetchProjectCardsData = createAsyncThunk('fetch/projects', getProjectCardsData)

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchProjectCardsData.pending, state => {
      state.isLoading = true
    })
    .addCase(fetchProjectCardsData.fulfilled, (state, action) => {
      state.projects = action.payload
      state.isLoading = false
      state.error = null
    })
    .addCase(fetchProjectCardsData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
}
})

export const projectsReducer = projectsSlice.reducer;
export const selectProjects = (state: RootStore) => state.projects
