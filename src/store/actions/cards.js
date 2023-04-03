export const addToCart = (state, items, cart, key, size)=>{
    const pickedItem = items.find(item=> item.id === key)
    console.log(pickedItem)
    if(!pickedItem) {
        alert('product doesn`t exist error')
        return state
    }
    if(pickedItem.amount.reduce((sum,item)=> sum+=item) <= 0) {
        alert('no product left in store')
        return state
    }
    if(pickedItem.amount.find(item=> item.size === size).amount <=0) {
        alert('no product with this size in store')
        return state
    }
    if(!cart.some(item=> item.id === key)){
        return {
            items: items.map(item=>{
                if(item.id === key){
                    return {...item, amount: item.amount.map(val=>{
                        console.log(val)
                        if(val.size === size){
                            return {...val, amount: val.amount - 1}
                        }
                        return val
                    })}
                }
                return item
            }),
            cart: [...cart,{...pickedItem, amount: [{size: size, amount: 1}]}]
        }
    }

    return {
        items: items.map(item=>{
            if(item.id === key){
                return {...item, amount: item.amount.map(val=>{
                    if(val.size === size){
                        return {...val, amount: val.amount - 1}
                    }
                    return val
                })}
            }
            return item
        }),
        cart: cart.map(item=>{
            if(item.id === key){
                if(item.amount.some(val=> val.size === size)){
                    return {...item, amount: item.amount.map(val=>{
                        if(val.size === size){
                            return {...val, amount: val.amount + 1}
                        }
                        return val
                    })}
                }
                return {...item, amount: [...item.amount, {size: size, amount: 1}]}
            }
            return item
        })
    }

}

export const removeFromCart = (state, items, cart, key, size)=>{
    const product = cart.find(value=> value.id === key)
    if(product.amount <= 1) {
        return {items: items.map(item=> item.id === product.id ? {...item, amount: item.amount+1}:item), cart: cart.filter(item=> item.id != product.id)}
    }
    if(product.amount > 1) {
        return { items: items.map(value=> value.id === key ? {...value, amount: value.amount + 1} : value),
        cart: cart.map(item=>
            item.id === product.id ? {...item, amount: item.amount-1} : item
        )
        }
    }
}