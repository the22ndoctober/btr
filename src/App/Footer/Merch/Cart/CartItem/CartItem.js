import React from 'react' 

export default function CartItem({
    name,
    src,
    price,
    sizes
}){
    
     return(
        <div className='cartItem'>
            <div className="cartItem__name">
                {name}
            </div>
            <div className="cartItem__photo">
                <img src={src} alt="" className='cartItem__img'/>
            </div>
            <div className="cartItem__price">
                {price}
            </div>
            <div className="cartItem__sizes">
                {sizes.map(size=> <div className='cartItem__size'>{size}</div>)}
            </div>
        </div>
     )


}