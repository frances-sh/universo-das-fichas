import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormCadastro from "../components/FormCadastro";

const Cadastro = () => {
  return (
    <div className="cadastro">    
      <main className="main-content">
        <h2>Página de Cadastro</h2>
        <FormCadastro />
      </main>
      <Footer />
    </div>
  );
};

export default Cadastro;