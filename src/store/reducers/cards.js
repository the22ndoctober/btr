import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../actions/cards'

const getCartItems = [
  {name: "Bullying Hoodie", src: "/content/cards/bullying__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {name: "Bullying T-Shirt", src: "/content/cards/bullying__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 1},
  {name: "Bullying Longsleave", src: "/content/cards/bullying__long.png", price: 10.99, type: 'longsleave', sizes: ["M","L","XL"], amount: 0},
  {name: "Post-War Hoodie", src: "/content/cards/postWar__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War T-Shirt", src: "/content/cards/postWar__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War Longsleave", src: "/content/cards/postWar__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War 2 Hoodie", src: "/content/cards/postWar2__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War 2 T-Shirt", src: "/content/cards/postWar2__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War 2 Longsleave", src: "/content/cards/postWar2__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War 3 Hoodie", src: "/content/cards/postWar3__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War 3 T-Shirt", src: "/content/cards/postWar3__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War 3 Longsleave", src: "/content/cards/postWar3__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War 4 Hoodie", src: "/content/cards/postWar4__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War 4 T-Shirt", src: "/content/cards/postWar4__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {name: "Post-War 4 Longsleave", src: "/content/cards/postWar4__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2},
  {name: "Human Hoodie", src: "/content/cards/human__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {name: "Human T-Shirt", src: "/content/cards/human__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {name: "Human Longsleave", src: "/content/cards/human__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2}
]

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {values: getCartItems,
    cart:[]
  },
  reducers: {
    increment(state) {
      state.values++
    },
    
  },
})

export const selectState = state=> state.cards.values
export const selectCart = state=> state.cards.cart
export const { increment } = cardsSlice.actions
export default cardsSlice.reducer