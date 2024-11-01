import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PortfolioButton } from "./components/PortfolioItems";

function App() {
  const proyects = [
    {
      title: "Some Awesome Proyect",
      description:
        "this is aproximdamente 30 segundos elevateor pitch for your proyecto",
      image: "https://placekitten/750",
      url: "https/someproyect.com",
      repo: "https//github.com/gabybevilacqua",
    },
    {
      title: "Another Awesome Proyect",
      description:
        "this is aproximdamente 30 segundos elevateor pitch for your proyecto",
      image: "https://placekitten/751",
      url: "https/someproyect.com",
      repo: "https//github.com/gabybevilacqua",
    },
    {
      title: "The Most Awesome Proyect",
      description:
        "this is aproximdamente 30 segundos elevateor pitch for your proyecto",
      image: "https://placekitten/752",
      url: null,
      repo: "https//github.com/gabybevilacqua",
    },
  ];

  return (
    <>
      <div className="fluid-container">
        <nav class="navbar navbar-expand-sm bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Portfolio
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {proyects.map((item, idx) => (
                  <PortfolioButton title={item.title} key={idx} />
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
