import React, { useState } from "react";
import axios from "axios";

const ClientesForm = () => {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome.trim()) {
      alert("Voce precisa adicionar um nome!");
      return;
    }
    axios
      .post("https://sua-url-ngrok.ngrok.io/clientes", { nome })
      .then(() => alert("Cliente adicionado!"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar cliente</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do cliente"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ClientesForm;
