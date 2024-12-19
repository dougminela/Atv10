import React, { useEffect, useState } from "react";
import axios from "axios";

const ProdutosList = () => {
  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://sua-url-ngrok.ngrok.io/produtos").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  const filteredProdutos = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredProdutos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProdutosList;
