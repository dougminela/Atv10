import React, { useEffect, useState } from "react";
import axios from "axios";

const PedidosForm = () => {
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [clienteId, setClienteId] = useState("");
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  useEffect(() => {
    axios.get("https://sua-url-ngrok.ngrok.io/clientes").then((response) => {
      setClientes(response.data);
    });
    axios.get("https://sua-url-ngrok.ngrok.io/produtos").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clienteId) {
      alert("Escolha um cliente!");
      return;
    }

    if (produtosSelecionados.length === 0) {
      alert("Selecione um produto!");
      return;
    }

    axios
      .post("https://sua-url-ngrok.ngrok.io/pedidos", {
        clienteId,
        produtosIds: produtosSelecionados,
      })
      .then(() => alert("Pedido criado!"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar pedido</h2>
      <div>
        <label>Cliente:</label>
        <select
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
        >
          <option value="">Selecione o cliente</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Produtos:</label>
        <select
          multiple
          value={produtosSelecionados}
          onChange={(e) =>
            setProdutosSelecionados(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {produtos.map((produto) => (
            <option key={produto.id} value={produto.id}>
              {produto.nome}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Criar pedido</button>
    </form>
  );
};

export default PedidosForm;
