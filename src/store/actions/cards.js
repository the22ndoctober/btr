export const addToCart = (state, items, cart, key)=>{
    const product = items.find(value=> value.id === key)
    if(product.amount <= 0) {
        alert('no product left in store')
        return state
    }
    return { items: items.map(value=> value.id === key ? {...value, amount: value.amount - 1} : value),
        cart: [...cart, {id:key, name: product.name, src: product.src, price: product.price, sizes: product.sizes}]
    }
}

export const removeFromCart = (state, info)=>{
    
}