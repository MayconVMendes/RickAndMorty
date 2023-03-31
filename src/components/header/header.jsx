import React, { useState } from "react";
import RickAndMorty from "../../assets/img/Rick-and-Morty.png";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="navigation">
      <div className="itens">
        <Link to="/" className="brand-name">
          <img className="logoImg" src={RickAndMorty} alt="Rick And Morty" />
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <div className={isExpanded ? "container change" : "container"}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </button>
        <div
          className={
            isExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              <Link to="/personagens" className="anchor">
                Personagens
              </Link>
            </li>
            <li
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              <Link to="/localizacoes" className="anchor">
                Localizações
              </Link>
            </li>
            <li
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              <Link to="/episodios" className="anchor">
                Episódios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
