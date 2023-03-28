export const addToCart = (state, items, cart, key, size)=>{
    const product = items.find(value=> value.id === key)
    const currentSize = product.amount.find(value=> value.size === size)

    
    if(product.amount.reduce((sum, next) => sum+=next.amount, 0) <= 0) {
        alert('no product left in store')
        return state
    }

    if(currentSize.amount <= 0) {
        alert('no product with this size left in store')
        return state
    }

    if(cart.some(item=> item.id === key)){
        return  { items: items.map(value=> value.id === key ? {...value, amount: product.amount.map(size=> size.size===size ? {...size, amount: size.amount+1}:size)} : value),
        cart: cart.map(item=>
            item.id === key ? {...item, amount: item.amount.map(size=> size.size===size ? {...size, amount: size.amount+1}:size)} : item
            )
        }
    }
    return { items: items.map(value=> value.id === key ? {...value, amount: product.amount.map(val=> val.size===size ? {...val, amount: size.amount+1}:val)} : value),
        cart: [...cart, {id:key, name: product.name, src: product.src, price: product.price, amount: [{size: size, amount: 1}]}]
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