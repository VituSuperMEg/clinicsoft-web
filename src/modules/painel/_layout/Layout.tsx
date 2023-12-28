// Layout.jsx
import React, { useState, createElement } from "react";
import { Menu } from "./Menu";
import { pages } from "./pages";

export function Layout() {
  const [currentPage, setCurrentPage] = useState(null);
  console.log(currentPage)
  function handleNavigatePage(page: string) {
    const selectedPage = pages.find((p) => p.page.toLowerCase() === page.toLowerCase());

    if (selectedPage) {
      setCurrentPage(() => selectedPage.component); 
    }
  }

  return (
    <div className="flex">
      <Menu onNavigatePage={handleNavigatePage} />
      <div>
        <header>Seu cabeçalho aqui</header>     
        {currentPage && createElement(currentPage)}
      </div>
    </div>
  );
}