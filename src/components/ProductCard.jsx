import { Link } from 'react-router-dom'

function ProductCard({ product }) {
    return (
      <div className="card h-100 shadow-sm product-card">
        <img
          src={product.image}
          className="card-img-top img-fluid"
          alt={product.name}
        />
  
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
  
          <p className="card-text text-muted">
            {product.category}
          </p>
  
          <p className="fw-bold">{product.price} €</p>
  
        <Link
          to={`/produit/${product.id}`}
          className="btn btn-dark mt-auto"
        >
          Voir détails
        </Link>
        </div>
      </div>
    )
  }
  
  export default ProductCard
  