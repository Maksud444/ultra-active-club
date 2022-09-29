const addToDb = id => {
    
    //clear localStorage
    localStorage.removeItem('gym-cart');
    let gymCart = {};

    //add item to localstorage
    gymCart[id] = 1;
    localStorage.setItem('gym-cart', JSON.stringify(gymCart));
}

const savedGymCart = () => {
    
    let gymCart = {}
    const storedCart = localStorage.getItem('gym-cart');
    if (storedCart) {
        gymCart = JSON.parse(storedCart);
    }
    return gymCart;
}
export { addToDb, savedGymCart}