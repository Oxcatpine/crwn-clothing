

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };


  export const reduceItemToCart = (cartItems, cartItemToreduce) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToreduce.id
    );
  
    if (existingCartItem.quantity=== 1) {
      return cartItems.filter (cartItem => cartItem.id !== cartItemToreduce.id)
    
    }

    return cartItems.map(cartItem =>
      cartItem.id === cartItemToreduce.id
        ? { ...cartItem, quantity: cartItem.quantity -1 }
        : cartItem
    );
  
   
  };
  