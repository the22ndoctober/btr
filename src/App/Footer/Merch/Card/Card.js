import React from 'react' 

export default function Card({
    name,
    src,
    price,
    type,
    sizes,
    amount
}){
    
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
                    <button className="merchCard__button merchCard__buttonBuy">
                        Buy
                    </button>
                    <button className="merchCard__button merchCard__buttonRemove">
                        Remove
                    </button>
                </div>
            </div>
        </div>
     )


}