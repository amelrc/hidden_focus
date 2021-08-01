import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "../../components/Image";

export const Ul = styled.ul`
  height: 70%;
  align-items: center;
`;
export const Li = styled.li`
  list-style: none;
  margin: 10px;
  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

export const Img = styled.img`
  width: 30vw;
`;

export const H1 = styled.h1`
  position: fixed;
  height: 10%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: flex-end;
  font: normal normal 5vw/5vw Mrs Saint Delafield;
  z-index: 2;
  color: #331c65;
`;

export const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  /* right: 0; */
  top: 0;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  // -webkit-transition: opacity 0.2s, visibility 0.2s;
  transition: opacity 0.2s, visibility 0.2s;
  margin: auto;
  font: 700 2vw Hidden Focus;
  color: #fff;
  // white-space: nowrap;
  text-align: center;
  letter-spacing: 1px;
`;

export const Hover = styled.div`
  position: relative;
  &:hover {
    ${P} {
      visibility: visible;
      opacity: 1;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      background-color: #1d0d2559;
    }
  }
`;

export const Title = styled.p`
  font: 30px / 30px "Hidden Focus";
  text-transform: capitalize;
  position: absolute;
  top: 50%;
  z-index: 1;
  color: #b3c53f;
`;
