import { useRef, useState } from "react";
import "./App.css";
import { 
  PortfolioButton, 
  PortfolioCard } 
  from "./components/PortfolioItems";

function App() {
  const proyects = useRef([
    {
      title: "Some Awesome Proyect",
      description:
        "this is aproximdamente 30 segundos elevateor pitch for your proyecto",
      image: "https://placedog.net/560/560",
      url: "https/someproyect.com",
      repo: "https//github.com/gabybevilacqua",
      ref: useRef(null),
    },
    {
      title: "Another Awesome Proyect",
      description:
        "this is aproximdamente 30 segundos elevateor pitch for your proyecto",
      image: "https://placedog.net/599/599",
      url: "https/someproyect.com",
      repo: null,
      ref: useRef(null),
    },
    {
      title: "The Most Awesome Proyect",
      description:
        "this is aproximdamente 30 segundos elevateor pitch for your proyecto",
      image: "https://placedog.net/598/598",
      url: null,
      repo: "https//github.com/gabybevilacqua",
      ref: useRef(null),
    },
  ]);

const handleClick = (item) => {
  item.ref.current.scrollIntoView();
}

  return (
    <>
      <div className="fluid-container">
        <nav className="navbar navbar-expand-sm bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => window.scroll(0, 0)}>
              Portfolio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                {proyects.current.map(
                  (item, idx) => (
                  <PortfolioButton 
                    title={item.title}
                    onClick={() => handleClick(item)} 
                    key={idx}
                    
                  />
                ))
              }
              </ul>
            </div>
          </div>
        </nav>
        <div className="container d-flex flex-column gap-3" style={{paddingTop: "7.5rem"}}>
          {proyects.current.map(
            (item, idx) => (
              <PortfolioCard
                maxWidth="100%" 
                item={item} 
                key={idx}
                ref={item.ref} 
                />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
