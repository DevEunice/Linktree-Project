import React from "react";
import "./index.css"
import { AppStyle } from "./AppStyle";
import Profile from "./components/Profile";
import Links from "./components/Links";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <AppStyle>
        <Profile />
        <Links />
        <Social />
      </AppStyle>
      <Footer />
    </div>
  );
}

export default App;
