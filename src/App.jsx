import React from "react";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Search from "./pages/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalProvider from "./Components/Context/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Glo>
  );
};

export default App;
