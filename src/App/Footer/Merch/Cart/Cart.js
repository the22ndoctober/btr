import React from 'react' 
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CartItem from './CartItem/CartItem'
import '../../../../style/footer/cart/cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, removeFromCart, addToCart } from '../../../../store/reducers/cards'

export default function Cart({
    isOpen,
    forceClose
    }){
    
    const cart = useSelector(selectCart)
    const dispatch = useDispatch()

    const add = (id)=>{
        dispatch(addToCart(id))
    }
    const remove = (id)=>{
        dispatch(removeFromCart(id))
    }
    

    return(
        isOpen &&
        <Modal
            className='cartModal'
            open={isOpen}
            onClose={forceClose}
        >   
            <div className='cartModal__wrapper'>
                <div className='cartModal__itemWrapper'>
                    {cart.map(item=> <CartItem
                        id={item.id}
                        name={item.name}
                        src={item.src}
                        price={item.price}
                        amount={item.amount}
                        add={()=>{
                            add(item.id)
                        }}
                        remove={()=>{
                            remove(item.id)
                        }}
                    />)}
                </div>

                <div className="cartModal__buttonsWrapper">
                    <button className='cartModal__button cartModal__buttonBuy' >
                        Buy
                    </button>
                    <button className='cartModal__button cartModal__buttonCancel' onClick={forceClose}>
                        Cancel
                    </button>
                </div>
            </div>
            
            
            
        </Modal>
    )


}