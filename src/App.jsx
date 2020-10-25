import React from "react";

import { Header } from "./containers/Header";
import { Main } from "./containers/Main";
import { Footer } from "./containers/Footer";

import "./App.css";
import { BurgerMenu } from "./components/BurgerMenu";

function App() {
  return (
    <div>
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <Header />
          <Main />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
