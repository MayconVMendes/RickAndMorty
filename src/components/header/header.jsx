import React, { useState } from "react";
import RickAndMorty from "../../assets/img/Rick-and-Morty.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchDados, clearDados } from "../../redux/userSlice";
import { useSearchName } from "../../hooks/useSearchName";
import "./header.scss";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [consulta, setConsulta] = useState("");
  const dispatch = useDispatch();
  const { searchName } = useSearchName();

  async function handleBuscarClick() {
    const response = await searchName(consulta);
    dispatch(searchDados(response?.results));
    setConsulta("");
  }

  return (
    <header className="navigation">
      <div className="itens">
        <Link
          to="/"
          onClick={() => dispatch(clearDados())}
          className="brand-name"
        >
          <img className="logoImg" src={RickAndMorty} alt="Rick And Morty" />
        </Link>

        <div>
          <input
            type="text"
            value={consulta}
            onChange={(event) => setConsulta(event.target.value)}
          />
          <button onClick={handleBuscarClick}>Buscar</button>
        </div>
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
              <Link
                to="/personagens"
                onClick={() => dispatch(clearDados())}
                className="anchor"
              >
                Personagens
              </Link>
            </li>
            <li
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              <Link
                to="/localizacoes"
                onClick={() => dispatch(clearDados())}
                className="anchor"
              >
                Localizações
              </Link>
            </li>
            <li
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              <Link
                to="/episodios"
                onClick={() => dispatch(clearDados())}
                className="anchor"
              >
                Episódios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
