import { useParams, Link } from "react-router-dom"
import products from "../data/products"
import { addToCart } from "../services/cartService"
import { useNavigate } from 'react-router-dom'


function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find(
    (p) => p.id === parseInt(id)
  )

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h3>Produit introuvable</h3>
        <Link to="/produits" className="btn btn-dark mt-3">
          Retour aux produits
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    navigate('/panier')
  }

  return (
    <div className="container mt-5">
        <div className="row align-items-center">
            <span className="badge bg-secondary mb-2">
                {product.category}
            </span>


            {/* IMAGE */}
            <div className="col-12 col-md-6 text-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded"
                />
            </div>

            {/* INFOS */}
            <div className="col-12 col-md-6 mt-4 mt-md-0 mb-3">
                <h2>{product.name}</h2>
                <p className="text-muted">{product.category}</p>

                <h4 className="fw-bold mb-3">
                    {product.price} €
                </h4>

                <p>
                    Ce produit a été soigneusement sélectionné pour vous offrir
                    confort, qualité et style au quotidien.
                </p>

                <button
                className="btn btn-dark btn-lg me-2"
                onClick={handleAddToCart}
                >
                    Ajouter au panier
                </button>

                <Link to="/produits" className="btn btn-outline-dark btn-lg">
                    Retour
                </Link>
            </div>

        </div>
    </div>
  )
}

export default ProductDetail
