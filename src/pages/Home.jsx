import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <main className="main-content">
        <h2>Página Home</h2>
        <p>Conteúdo da página Home.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;