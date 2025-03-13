import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="main-page">
      <main className="main-content">
        <section className="hero">
          <h2>Bem-vindo ao Universo das Fichas!</h2>
          <p>
            Gerencie suas fichas de personagens de RPG de forma simples e
            eficiente.
          </p>
          <div className="cta-buttons">
            <Link to="/cadastro" className="cta-button">
              Cadastre-se
            </Link>
            <Link to="/home" className="cta-button secondary">
              Entrar
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;