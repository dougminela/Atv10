import React, { useEffect, useState } from "react";
import axios from "axios";

const PedidosList = () => {
  const [pedidos, setPedidos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://sua-url-ngrok.ngrok.io/pedidos").then((response) => {
      setPedidos(response.data);
    });
  }, []);

  const filteredPedidos = pedidos.filter(
    (pedido) =>
      pedido.cliente.nome.toLowerCase().includes(search.toLowerCase()) ||
      pedido.produtos.some((produto) =>
        produto.nome.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <input
        type="text"
        placeholder="Buscando por clientes ou produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredPedidos.map((pedido) => (
          <li key={pedido.id}>
            Cliente: {pedido.cliente.nome}, Produtos:{" "}
            {pedido.produtos.map((produto) => produto.nome).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PedidosList;
