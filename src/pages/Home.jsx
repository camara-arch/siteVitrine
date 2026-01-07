import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-light py-5 px-3 px-md-5">
        <div className="container">
          <div className="row align-items-center">

            <div
              className="col-12 col-md-6 text-center text-md-start"
              data-aos="fade-right"
            >
              <h1 className="display-5 fw-bold">
                Mode & Accessoires tendance
              </h1>
              <p className="lead">
                Des pièces soigneusement sélectionnées pour sublimer votre style.
              </p>
              <Link to="/produits" className="btn btn-dark btn-lg me-2">
                Découvrir la collection
              </Link>
              <Link to="/apropos" className="btn btn-outline-dark btn-lg">
                À propos
              </Link>
            </div>

            <div
              className="col-12 col-md-6 mt-4 mt-md-0 text-center"
              data-aos="fade-left"
            >
              <img
                src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
                alt="Fashion"
                className="img-fluid rounded w-100"
                style={{ maxHeight: "450px", objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* NOS AVANTAGES */}
      <section className="py-5 px-3 px-md-5">
        <div className="container" data-aos="fade-up">
          <div className="row text-center g-4">
            <div className="col-12 col-md-4">
              <h5>Qualité premium</h5>
              <p className="text-muted">
                Des matériaux durables et confortables.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <h5>Tendance actuelle</h5>
              <p className="text-muted">
                Des collections inspirées des dernières modes.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <h5>Livraison rapide</h5>
              <p className="text-muted">
                Recevez vos articles partout, rapidement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOS CATEGORIES */}
      <section className="bg-light py-5 px-3 px-md-5">
        <div className="container">
          <h2 className="text-center mb-4" data-aos="fade-up">
            Nos catégories
          </h2>

          <div className="row g-4">
            {/* Vêtements */}
            <div className="col-12 col-md-6" data-aos="zoom-in">
              <Link to="/produits?categorie=Vêtements" className="text-decoration-none">
                <div className="card text-center h-100 border-0 shadow category-card">
                  <img
                    src="https://th.bing.com/th/id/OIP.35UGwyzZw5Uo4kUl6DC3TQHaE7?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    className="card-img-top"
                    alt="Vêtements"
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title text-dark">Vêtements</h5>
                    <p className="card-text text-muted">
                      T-shirts, vestes, pantalons et plus
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Accessoires */}
            <div className="col-12 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <Link to="/produits?categorie=Accessoires" className="text-decoration-none">
                <div className="card text-center h-100 border-0 shadow category-card">
                  <img
                    src="https://th.bing.com/th/id/OIP.0cqJfE4WOoOZNSsz5q3iTgHaE7?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    className="card-img-top"
                    alt="Accessoires"
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title text-dark">Accessoires</h5>
                    <p className="card-text text-muted">
                      Sacs, casquettes, bijoux et plus
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
