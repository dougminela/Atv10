import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/clientes">
        Clientes
      </Button>
      <Button color="inherit" component={Link} to="/produtos">
        Produtos
      </Button>
      <Button color="inherit" component={Link} to="/pedidos">
        Pedidos
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
