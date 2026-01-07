function About() {
    return (
      <div className="container mt-5">
        <div className="row align-items-center">
  
          <div className="col-12 col-md-6">
            <h2>À propos de FashionStore</h2>
            <p className="text-muted">
              FashionStore est une marque dédiée à la mode moderne et accessible.
              Nous sélectionnons des vêtements et accessoires qui allient style,
              confort et qualité.
            </p>
  
            <p className="text-muted">
              Notre objectif est de proposer des collections adaptées à tous les
              styles, en mettant l’accent sur la durabilité et les tendances
              actuelles.
            </p>
          </div>
  
          <div className="col-12 col-md-6 mt-4 mt-md-0 text-center">
            <img
              src="https://via.placeholder.com/450x350"
              alt="À propos"
              className="img-fluid rounded"
            />
          </div>
  
        </div>
  
        {/* VALEURS */}
        <div className="row mt-5 text-center g-4">
          <div className="col-12 col-md-4">
            <h5>Qualité</h5>
            <p className="text-muted">
              Des produits sélectionnés avec exigence.
            </p>
          </div>
  
          <div className="col-12 col-md-4">
            <h5>Accessibilité</h5>
            <p className="text-muted">
              Une mode pour tous, à prix juste.
            </p>
          </div>
  
          <div className="col-12 col-md-4">
            <h5>Engagement</h5>
            <p className="text-muted">
              Une démarche responsable et durable.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default About
  