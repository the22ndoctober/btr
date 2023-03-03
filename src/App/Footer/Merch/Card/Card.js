import React from 'react' 

export default function Card({
    name,
    src,
    price,
    type,
    sizes
}){
    
     return(
        <div className='merchCard'>
            <div className="merchCard__photo">
                <img className='merchCard__img' src={src} alt="" />
            </div>
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
     )


}