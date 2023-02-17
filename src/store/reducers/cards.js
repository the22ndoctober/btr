import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'





export const getCartItems = createAsyncThunk('cards/getCartItems', ()=>{
    return fetch('../cards.json')
    .then((res)=> res.json())
    .catch((err) => console.log(err))
})

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    values:[],
    isLoading: true
  },
  extraReducers: {
    [getCartItems.pending]: (state) =>{
        state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action)=>{
        console.log(action)
        state.isLoading = false
        state.values = action.payload
    },
    [getCartItems.rejected]: (state) =>{
        state.isLoading = false
    }
  },
  reducers: {
    increment(state) {
      state.values++
    },
    
  },
})

export const { increment } = cardsSlice.actions
export default cardsSlice.reducer