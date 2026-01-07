import { useState } from "react"
import { getCart, clearCart } from "../services/cartService"
import { useNavigate } from "react-router-dom"

function Order() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    adresse: "",
    commentaire: ""
  })

  const [cart] = useState(getCart())
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Votre panier est vide</h2>
      </div>
    )
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Créer l'objet commande
    const order = {
      client: formData,
      produits: cart,
      date: new Date().toISOString()
    }

    // Pour l'instant : log dans la console
    console.log("📦 NOUVELLE COMMANDE :", order)

    // Optionnel : envoi WhatsApp automatique
    const message = `
Nouvelle commande :
Nom : ${formData.nom}
Téléphone : ${formData.telephone}
Adresse : ${formData.adresse}
Commentaire : ${formData.commentaire || "Aucun"}
Produits :
${cart.map(p => `- ${p.name} (${p.price}€)`).join("\n")}
    `
    window.open(`https://wa.me/224620905540?text=${encodeURIComponent(message)}`)

    // Nettoyer le panier
    clearCart()

    alert("Votre commande a été enregistrée ! Nous vous contacterons pour confirmation.")
    navigate("/produits")
  }

  return (
    <div className="container py-5 w-50">
      <h2>Finaliser la commande</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nom complet</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Téléphone</label>
          <input
            type="tel"
            name="telephone"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Adresse de livraison</label>
          <textarea
            name="adresse"
            className="form-control"
            rows="3"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Commentaire (optionnel)</label>
          <textarea
            name="commentaire"
            className="form-control"
            rows="2"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Confirmer la commande
        </button>
      </form>
    </div>
  )
}

export default Order
