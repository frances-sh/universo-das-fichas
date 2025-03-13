import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Universo das Fichas</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;