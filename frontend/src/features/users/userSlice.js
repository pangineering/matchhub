import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'


const initialState = {
  users: [],
  uisError: false,
  uisSuccess: false,
  uisLoading: false,
  umessage: '',
}



// Get user projects
export const getAllUsers = createAsyncThunk(
  'user/list',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await userService.getAllUsers(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset_user: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    //   .addCase(createproject.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(createproject.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.projects.push(action.payload)
    //   })
    //   .addCase(createproject.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
      .addCase(getAllUsers.pending, (state) => {
        state.uisLoading = true
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.uisLoading = false
        state.uisSuccess = true
        state.users = action.payload
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.uisLoading = false
        state.uisError = true
        state.umessage = action.payload
      })
  
      


  },
})

export const { reset_user } = userSlice.actions
export default userSlice.reducer
