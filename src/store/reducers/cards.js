import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../actions/cards'

const getCartItems = [
  {id: '0001', name: "Bullying Hoodie", src: "/content/cards/bullying__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {id: '0002', name: "Bullying T-Shirt", src: "/content/cards/bullying__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 1},
  {id: '0003', name: "Bullying Longsleave", src: "/content/cards/bullying__long.png", price: 10.99, type: 'longsleave', sizes: ["M","L","XL"], amount: 0},
  {id: '0004', name: "Post-War Hoodie", src: "/content/cards/postWar__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {id: '0005', name: "Post-War T-Shirt", src: "/content/cards/postWar__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {id: '0006', name: "Post-War Longsleave", src: "/content/cards/postWar__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2},
  {id: '0007', name: "Post-War 2 Hoodie", src: "/content/cards/postWar2__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {id: '0008', name: "Post-War 2 T-Shirt", src: "/content/cards/postWar2__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {id: '0009', name: "Post-War 2 Longsleave", src: "/content/cards/postWar2__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2},
  {id: '0010', name: "Post-War 3 Hoodie", src: "/content/cards/postWar3__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {id: '0011', name: "Post-War 3 T-Shirt", src: "/content/cards/postWar3__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {id: '0012', name: "Post-War 3 Longsleave", src: "/content/cards/postWar3__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2},
  {id: '0013', name: "Post-War 4 Hoodie", src: "/content/cards/postWar4__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {id: '0014', name: "Post-War 4 T-Shirt", src: "/content/cards/postWar4__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {id: '0015', name: "Post-War 4 Longsleave", src: "/content/cards/postWar4__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2},
  {id: '0016', name: "Human Hoodie", src: "/content/cards/human__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"], amount: 2},
  {id: '0017', name: "Human T-Shirt", src: "/content/cards/human__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"], amount: 2},
  {id: '0018', name: "Human Longsleave", src: "/content/cards/human__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"], amount: 2}
]

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    values: {
      items: [...getCartItems],
      cart:[]
    }
    
  },
  reducers: {
    addToCart: (state, action)=> {
      state.values = actions.addToCart( state.values, state.values.items, state.values.cart, action.payload)
    },
    removeFromCart: (state,action) =>{
      state.values = actions.removeFromCart(state.values, state.values.items, state.values.cart, action.payload)
    },
    
  },
})

export const { addToCart, removeFromCart } = cardsSlice.actions
export const selectState = state=> state.cards.values.items
export const selectCart = state=> state.cards.values.cart
export default cardsSlice.reducer