import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { museum } from "../Data";
import styled from "styled-components";
import { device } from "../generalStyles";
import { staggerReveal, staggerRevealClose } from "./WrongAnimations";
import Contest from "../images/AW/WEB--1555--252kb--Angkor--p.5.jpg";

const LeftMenu = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
`;
const RightMenu = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 10%;
`;

const Li = styled.li`
  font: 4vw/5vw Hidden Focus;
  color: #f9efff;
  list-style: none;
  margin: 4px auto;
  &:hover {
    color: #8a33b9;
  }
`;

const Links = styled(Link)`
  // text-transform: uppercase;
  color: #f9efff;
  text-decoration: none;
  &:hover {
    color: #8a33b9;
  }
`;
const LiSmall = styled.li`
  font: 4vw/4vw Hidden Focus;
  margin-left: 14%;
  letter-spacing: 1px;
  & ${Links} {
    -webkit-text-stroke: 1px #b3c53f;
    color: transparent;
    font: 3vw/3vw Hidden Focus;
    text-transform: capitalize;
    &:hover {
      color: #b3c53f;
    }
  }
`;

const Ul = styled.ul`
  padding: 0;
  & ${Li}:nth-child(2) ${Links} {
    color: #b3c53f;
    &:hover {
      color: #8a33b9;
    }
  }
  & ${LiSmall}:nth-child(3) {
    margin-left: 20%;
  }
  & ${LiSmall}:nth-child(4) {
    margin-left: 24%;
  }
  & ${LiSmall}:nth-child(5) {
    margin-left: 30%;
  }
`;

const ContestText = styled.h3`
  font: 3vw/8vw "Mrs Saint Delafield";
  text-transform: capitalize;
  color: #f9efff;
  margin: 0;
  @media ${device.large} {
    font: 3vw/5vw "Mrs Saint Delafield";
  }
`;

const ContestNumber = styled(ContestText)`
  font: 300 2vw/3vw Lato;
  margin-top: -20px;
  @media ${device.large} {
    font: 200 2vw/2vw "Lato";
  }
`;

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      />
      <div ref={(el) => (reveal2 = el)} className="menu-layer flex">
        <LeftMenu>
          <Link to="/constest">
            <img width={"80%"} src={Contest} alt="" />
          </Link>
          <ContestText>name the picture context</ContestText>
          <ContestNumber>2020</ContestNumber>
        </LeftMenu>
        <RightMenu>
          <nav style={{ marginTop: "20%" }}>
            <Ul className="unlist">
              <Li>
                <Links to="/whynow">Why Now?</Links>
              </Li>

              <Li style={{ margin: "8% auto 0 9%" }}>
                <Links to="/gallery">Galleries</Links>
              </Li>
              {museum.map((room, i) => {
                return (
                  <LiSmall key={i}>
                    <Links to={`/menu/${room.floors}`}>{room.floors}</Links>
                  </LiSmall>
                );
              })}

              <Li>
                <Links to="/influences">Influences</Links>
              </Li>
              <Li>
                <Links style={{ marginLeft: 20 }} to="/photoshoppe">
                  Photo Shoppe
                </Links>
              </Li>
              <Li>
                <Links to="/contact">Contact</Links>
              </Li>
            </Ul>
          </nav>
        </RightMenu>
      </div>
    </div>
  );
};

export default Hamburger;
