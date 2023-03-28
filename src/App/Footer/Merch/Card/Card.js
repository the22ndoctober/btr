import React, { useState } from 'react' 
import { addToCart} from '../../../../store/reducers/cards'
import { useDispatch } from 'react-redux'
import Size from './Size/Size'


export default function Card({
    id,
    name,
    src,
    price,
    type,
    amount
    
}){
    const [activeSize, setActiveSize] = useState()
    const dispatch = useDispatch()
    const addToCartBtn = ()=>{
        activeSize ? dispatch(addToCart({id:id,activeSize: activeSize})) : alert('Choose size')
        
    }
    

     return(
        <div className='merchCard'>
            {amount.reduce((sum, next) => sum+=next.amount, 0) === 0 && <div className='merchCard__soldOut'>SOLD OUT</div>}
            <div className="merchCard__wrapper">

                <div className="merchCard__photo">
                    <img className='merchCard__img' src={src} alt="" />
                </div>
                <div className="merchCard__info">
                    <div className="merchCard__name">
                        {name}
                    </div>
                    <div className="merchCard__price">
                        {price} $
                    </div>
                    <div className="merchCard__sizes">
                        {amount.map(item=> {
                            if(item.amount > 0) 
                            return <Size
                                size={item.size}
                                amount={item.amount}
                                handleActive={setActiveSize}
                                active={activeSize}
                            />
                            

                        } 
                        )}
                    </div>
                </div>
                <div className="merchCard__buttons">
                    <button className="merchCard__button merchCard__buttonBuy" onClick={addToCartBtn}>
                        Buy
                    </button>
                    <div className="merchCard__left">
                        Left in store: {amount.reduce((sum, next) => sum+=next.amount, 0)}
                    </div>
                </div>
            </div>
        </div>
     )


}