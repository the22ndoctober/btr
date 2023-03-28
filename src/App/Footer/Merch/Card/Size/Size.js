import React from 'react' 

export default function Size({
    size,
    amount,
    active,
    handleActive,

}){
    
     return(
        <div className={`merchCard__sizes ${active===size? 'merchCard__sizes-active' : ''}`} onClick={()=>{handleActive(size)}}>
            {size}
        </div>
     )


}