import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    heroes: [],
    quantity: 0,
    total: 0,
    hours: 0,
  },

  reducers: {
    addHero: (state, action) => {
      state.heroes.push(action.payload)
      state.quantity += 1
      state.total += action.payload.price * action.payload.quantity
    },

    reset: (state) => {
      state.heroes = []
      state.quantity = 0
      state.total = 0
      state.hours = 0
    },
  },
})

export const { addHero, reset } = cartSlice.actions
export default cartSlice.reducer
