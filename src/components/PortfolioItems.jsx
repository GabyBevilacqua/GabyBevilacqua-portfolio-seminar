const PortfolioButton =({ title }) => {
    return    <li class="nav-item">
    <a class="nav-link" href="#">
    { title }
    </a>
  </li>
  
}

const PortfolioCard =({ portfolioItem }) => {
    return(
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={portfolioItem.image} class="img-fluid rounded-start" alt="foto de gato"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{portfolioItem.title}</h5>
        <p class="card-text">{portfolioItem.description}</p>
        <p class="card-text">
            <button className="btn btn-primary">See it in action!</button>
            <button className="btn btn-secondary">See the code</button>
        
        </p>
      </div>
    </div>
  </div>
</div>
    )
}
export {
    PortfolioButton
}