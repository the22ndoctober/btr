import React from 'react' 

export default function CartItem({
    name,
    src,
    price,
    amount,
    add,
    remove
}){
    console.log(amount)
     return(
        <div className='cartItem'>
            <div className="cartItem__name">
                {name}
            </div>
            <div className="cartItem__photo">
                <img src={src} alt="" className='cartItem__img'/>
            </div>
            <div className="cartItem__price">
                {price}$
            </div>
            <div className="cartItem__sizes">
                {amount.map(size=> <div className='cartItem__size'>{size.size}</div>)}
            </div>
            <div className="cartItem__buttonWrapper">
                <button className='cartItem__button cartItem__buttonAdd' onClick={add}> 
                    +
                </button>
                <button className='cartItem__button cartItem__buttonRemove' onClick={remove}> 
                    -
                </button>
            </div>
            <div className="cartItem__amount">
                {amount.map(size=> size.amount)}
            </div>
        </div>
     )


}