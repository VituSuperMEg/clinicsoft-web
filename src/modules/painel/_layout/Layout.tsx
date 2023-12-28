import React, { useState, createElement } from "react";
import { Menu } from "./Menu";
import { pages } from "./pages";
import { Header } from "./Header";

export function Layout() {
  const [currentPage, setCurrentPage] = useState('null');
  
  function handleNavigatePage(page: string) {
    const selectedPage = pages.find((p) => p.page.toLowerCase() === page.toLowerCase());

    if (selectedPage) {
      setCurrentPage(() => selectedPage.component); 
    }
  }

  return (
    <div className="flex">
      <Menu onNavigatePage={handleNavigatePage} />
      <div className="w-full h-screen">
        <Header />  
        {currentPage && createElement(currentPage)}
      </div>
    </div>
  );
}