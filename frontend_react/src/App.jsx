import React, { useEffect, useState } from "react";

import {
  About,
  Contact,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./containers";

import { Navbar, Footer, Loading } from "./components";
import "./App.scss";

const App = () => {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return (
      <div className="app">
        <Loading fullScreen />
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
