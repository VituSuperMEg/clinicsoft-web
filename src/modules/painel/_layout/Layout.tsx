import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <header>Seu cabeçalho aqui</header>
      <Outlet />
    </div>
  );
}
