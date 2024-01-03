import React, { useState, createElement, useEffect } from "react";
import { Menu } from "./Menu";
import { pages } from "./pages";
import { Header } from "./Header";
import { If } from "../../../helpers/If";
import { Breadcrumbs } from "../../../components/breadCrumbs/BreadCrumbs";
import { PillMenu } from "./PillMenu";
import { UserInfo } from "../../../components/userInfo/UserInfo";

export function Layout() {
  const [currentPage, setCurrentPage] = useState("null");
  const [aba, setAba] = useState("");
  const [abaMenu, setAbaMenu] = useState("");
  const [recentAba, setRecentAba] = useState([]);
  
  useEffect(() => {
    if(currentPage === 'null')  {
      setAba('dashboard');
      setCurrentPage(() => pages[0]?.component);
    }
  }, [currentPage])
  function handleNavigatePage(page: string, menu: string) {
    setAba(page);
    setAbaMenu(menu);

    const selectedPage = pages.find(
      (p) => p.page.toLowerCase() === page.toLowerCase()
    );

    if (selectedPage) {
      setCurrentPage(() => selectedPage.component);
    }
    if (page !== "dashboard") {
      const isAbaAlreadyAdded = recentAba.some((aba) => aba.page === page);

      if (!isAbaAlreadyAdded) {
        setRecentAba((prevState) => [...prevState, { page, menu }]);
      }
    }
  }
  return (
    <div className="flex">
      <Menu onNavigatePage={handleNavigatePage} />
      <div className="w-full h-screen">
        {/* <Header /> */}
        <If test={aba !== "dashboard"}>
          {/* <div style={{
            margin: '20px 50px'
          }}>
          <PillMenu onNavigatePage={handleNavigatePage} pages={recentAba} />
          </div> */}
          <div className="crud">
            <If test={aba}>
              <div className="left h-16">
               <UserInfo /> 
              </div>
              <Breadcrumbs page={aba} menu={abaMenu} />
            </If>
            {currentPage && createElement(currentPage)}
          </div>
        </If>
        <If test={aba === "dashboard"}>
          <div
          >
             <div className="left h-16">
               <UserInfo /> 
              </div>
            {/* <PillMenu onNavigatePage={handleNavigatePage} pages={recentAba} /> */}
            {currentPage && createElement(currentPage)}
          </div>
        </If>
      </div>
    </div>
  );
}
