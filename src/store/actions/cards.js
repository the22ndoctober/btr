export const addToCart = (state, items, cart, key)=>{
    const product = items.find(value=> value.id === key)
    if(product.amount <= 0) {
        alert('no product left in store')
        return state
    }
    if(cart.some(item=> item.id === product.id)){
        return  { items: items.map(value=> value.id === key ? {...value, amount: value.amount - 1} : value),
        cart: cart.map(item=>
            item.id === product.id ? {...item, amount: item.amount+1} : item
        )
    }
    }
    return { items: items.map(value=> value.id === key ? {...value, amount: value.amount - 1} : value),
        cart: [...cart, {id:key, name: product.name, src: product.src, price: product.price, sizes: product.sizes, amount: 1}]
    }
}

export const removeFromCart = (state, items, cart, key)=>{
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