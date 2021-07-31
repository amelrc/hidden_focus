import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { museum } from "../Data";
import Contest from "../images/AW/WEB--1555--252kb--Angkor--p.5.jpg";

const MenuWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1c161f;
  font-family: Roxborough CF;
  align-items: center;
  width: 100%;
`;

const LeftMenu = styled.div`
  width: 40%;
`;
const RightMenu = styled.div`
  width: 60%;
`;

const Navigation = styled.h2`
  font: normal normal 100 60px/40px Roxborough CF;
  letter-spacing: 0px;
  color: #fbf8fd;
  text-transform: uppercase;
  color: #fbf8fd;
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <LeftMenu>
        {/* <h3>Hidden Focus</h3> */}
        <img width={300} height={200} src={Contest} alt="" />
        <h3>name the picture context</h3>
      </LeftMenu>
      <RightMenu>
        <ul className="unlist">
          <li>
            <Navigation>
              <Link
                style={{ textDecoration: "none", color: "#fbf8fd" }}
                to="/whynow"
              >
                Why Now
              </Link>
            </Navigation>
          </li>
        </ul>
        <Navigation>Galleries</Navigation>
        <ul className="unlist">
          {museum.map((room, i) => {
            return (
              <li key={i}>
                <Link to={`/menu/${room.floors}`}>{room.floors}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <Navigation>
              <Link
                style={{ textDecoration: "none", color: "#fbf8fd" }}
                to="/influences"
              >
                Influences
              </Link>
            </Navigation>
          </li>
          <li>
            <Navigation>
              <Link
                style={{ textDecoration: "none", color: "#fbf8fd" }}
                to="/contact"
              >
                Contact
              </Link>
            </Navigation>
          </li>
          <li>
            <Navigation>
              <Link
                style={{ textDecoration: "none", color: "#fbf8fd" }}
                to="/shoppe"
              >
                Photo Shoppe
              </Link>
            </Navigation>
          </li>
        </ul>
      </RightMenu>
    </MenuWrapper>
  );
};
export default Menu;
