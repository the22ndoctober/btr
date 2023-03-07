import React from 'react' 
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CartItem from './CartItem/CartItem'
import '../../../../style/footer/cart/cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, removeFromCart } from '../../../../store/reducers/cards'

export default function Cart({
    isOpen,
    forceClose
    }){
    
    const cart = useSelector(selectCart)

    return(
        isOpen &&
        <Modal
            className='cartModal'
            open={isOpen}
            onClose={forceClose}
        >
            <div className='cartModal__wrapper'>
                {cart.map(item=> <CartItem
                    name={item.name}
                    src={item.src}
                    price={item.price}
                    sizes={item.sizes}

                />)}
            </div>
        </Modal>
    )


}