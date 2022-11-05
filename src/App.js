import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { AppStyle } from "./AppStyle"
import Links from "./components/Links";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
   <Fragment>
    <Router>
    <Routes>
    <Route path="/" element={
    <>
  
      <AppStyle>
      <Profile />
      <Links />
      <Social />
    </AppStyle>

    </>
    }
    />
    <Route path="/contact" element={<Contact/>} />

    </Routes>
    </Router>
    <Footer />
    </Fragment>
  );
}

export default App;
