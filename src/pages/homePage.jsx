import React from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import "./homePage.css";

function App() {
  return (
    <div className="background">
      <div className="align ">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
