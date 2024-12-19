import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ClientesList from "./components/Clientes/ClientesList";
import ProdutosList from "./components/Produtos/ProdutosList";
import PedidosList from "./components/Pedidos/PedidosList";
import ClientesForm from "./components/Clientes/ClientesForm";
import ProdutosForm from "./components/Produtos/ProdutosForm";
import PedidosForm from "./components/Pedidos/PedidosForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rotas para Clientes */}
        <Route path="/clientes" element={<ClientesList />} />
        <Route path="/clientes/novo" element={<ClientesForm />} />

        {/* Rotas para Produtos */}
        <Route path="/produtos" element={<ProdutosList />} />
        <Route path="/produtos/novo" element={<ProdutosForm />} />

        {/* Rotas para Pedidos */}
        <Route path="/pedidos" element={<PedidosList />} />
        <Route path="/pedidos/novo" element={<PedidosForm />} />
      </Routes>
    </Router>
  );
};

export default App;
