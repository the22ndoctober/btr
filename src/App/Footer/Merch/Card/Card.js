import React from 'react' 
import { addToCart} from '../../../../store/reducers/cards'
import { useDispatch } from 'react-redux'

export default function Card({
    id,
    name,
    src,
    price,
    type,
    sizes,
    amount
}){
    const dispatch = useDispatch()
    const addToCartBtn = ()=>{
        dispatch(addToCart(id))
    }
     return(
        <div className='merchCard'>
            {amount === 0 && <div className='merchCard__soldOut'>SOLD OUT</div>}
            <div className="merchCard__wrapper">

                <div className="merchCard__photo">
                    <img className='merchCard__img' src={src} alt="" />
                </div>
                <div className="merchCard__info">
                    <div className="merchCard__name">
                        {name}
                    </div>
                    <div className="merchCard__price">
                        {price}
                    </div>
                    <div className="merchCard__sizes">
                        {sizes.map(size=> <div className='merchCard__sizesText'>
                            {size}
                        </div>)}
                    </div>
                </div>
                <div className="merchCard__buttons">
                    <button className="merchCard__button merchCard__buttonBuy" onClick={addToCartBtn}>
                        Buy
                    </button>
                    <div className="merchCard__left">
                        Left in store: {amount}
                    </div>
                </div>
            </div>
        </div>
     )


}