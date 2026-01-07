import { useState } from "react"
import { getCart, removeFromCart } from "../services/cartService"
import { Link } from "react-router-dom"

function Cart() {
  // ✅ Initialisation directe (PAS de useEffect)
  const [cart, setCart] = useState(() => getCart())

  const handleRemove = (id) => {
    removeFromCart(id)
    setCart(getCart())
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Panier vide</h2>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <h2>Mon panier</h2>

      {cart.map(item => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border-bottom py-3"
        >
          <div>
            <h5 className="mb-1">{item.name}</h5>
            <p className="mb-0">{item.price} €</p>
          </div>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => handleRemove(item.id)}
          >
            Supprimer
          </button>
        </div>
      ))}

      <h4 className="mt-4">Total : {total} €</h4>
      <div className="mt-4 text-end">
    <Link to="/commande" className="btn btn-dark">
        Passer la commande
    </Link>
</div>
    </div>
  )
}

export default Cart
