import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Message WhatsApp pré-rempli
    const message = `
*Nouvelle demande de contact :*
Nom : ${formData.nom}
Email : ${formData.email}
Message : ${formData.message}
    `

    // Remplace par ton numéro WhatsApp avec indicatif international
    const phone = "224620905540"

    // Ouvre WhatsApp avec le message
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    window.open(url)

    // Réinitialiser le formulaire
    setFormData({ nom: "", email: "", message: "" })
  }

  return (
    <div className="container mt-5 w-50">
      <h2 className="text-center mb-3">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-dark">
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default Contact
