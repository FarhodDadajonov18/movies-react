import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
     <>
     <Header />
    <main className="main">
      <Main/>
    </main>
     <Footer />
     </>
  );
}

export default App;
