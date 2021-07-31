import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Show from "./components/Show.jsx";
import Header from "./components/Header.jsx";
import WrongHeader from "./components/Menu/WrongHeader";
import CircleComponent from "./components/Circle.jsx";

import Menu from "./pages/Menu";
import WhatNow from "./pages/WhyNow/WhyNow";
import Gallery from "./pages/Gallery/Gallery";
import Influences from "./pages/Influences";
import Latf from "./pages/Latf/Latf.jsx";
import Lightscapes from "./pages/Lightscapes/Lightscapes.jsx";
import Contest from "./pages/Contest.jsx";
import Angkor from "./pages/Angkor/Angkor.jsx";
import Enescu from "./pages/Enescu/Enescu.jsx";
import Mexico from "./pages/Mexico/Mexico.jsx";
import Amigos from "./pages/Amigos/Amigos.jsx";
import Test from "./pages/Test.jsx";
import Home from "./pages/Home/Home.jsx";
import NewYork from "./pages/NewYork/NewYork.jsx";

const ReactRouterSetup = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  };

  const { height, width } = useWindowDimensions();
  return (
    <HashRouter>
      {height > width ? (
        <div>turn screen</div>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <div>
            <WrongHeader />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/test" component={CircleComponent} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/whynow" component={WhatNow} />
              <Route exact path="/look-at-the-flowers" component={Latf} />
              <Route exact path="/lightscapes" component={Lightscapes} />
              <Route exact path="/george-enescu" component={Enescu} />
              <Route exact path="/new-york" component={NewYork} />
              <Route
                exact
                path="/show-look-at-the-flowers"
                component={Mexico}
              />
              <Route exact path="/cuatro-amigos" component={Amigos} />
              <Route exact path="/influences" component={Influences} />
              <Route exact path="/angkor-wat" component={Angkor} />
              <Route exact path="/contest" component={Contest} />
              <Route exact path="/menu/:topic" component={Gallery} />
              <Route exact path="/gallery/:topic" component={Show} />
              <Route exact path="/gallery/:topic/:tabName" component={Show} />
            </Switch>
          </div>
        </AnimatePresence>
      )}
    </HashRouter>
  );
};

export default ReactRouterSetup;
