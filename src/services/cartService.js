export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || []
  }
  
  export function addToCart(product) {
    const cart = getCart()
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  
  export function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id)
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  
  export function clearCart() {
    localStorage.removeItem("cart")
  }
  