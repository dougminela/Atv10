import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientesList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get("https://sua-url-ngrok.ngrok.io/clientes").then((response) => {
      setClientes(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Lista de clientes</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientesList;
