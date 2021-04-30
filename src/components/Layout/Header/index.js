import React from "react";
import { Button } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { Link, HeaderComponent } from "./styles";

export default function Header({ togleTheme }) {
  var theme = localStorage.getItem('theme')
  return (
    <HeaderComponent>
      <Link href="/">
        <h1>Where in the world?</h1>
      </Link>
      <Button
        disableElevation
        startIcon={<Brightness4Icon />}
        onClick={togleTheme}
        style={{ color: theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)', transition: 'all .5s linear' }}
      >
        {theme === 'light' ? 'dark theme' : 'light theme'}
      </Button>
    </HeaderComponent>
  );
}
