function getItemsInCart() {
    if (typeof document !== 'undefined') {
         let element = document.querySelector('.class-name');
         document.getElementById("itemsInCart").innerHTML = localStorage.itemsForCart;
    }
}
                
function emptyCart() {
    if (typeof document !== 'undefined') {
    localStorage.removeItem("itemsForCart");
            //Clear the cart message (remove this later)
    document.getElementById("itemsInCart").innerHTML =  "";   
    }
}        