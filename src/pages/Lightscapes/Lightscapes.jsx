import React, { useState, useRef, useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import { Link } from "react-router-dom";
import {
  WrapperIntroText,
  IntroContainer,
  ImageWrapper,
  FigCaption,
  Wrapper,
} from "./styles";
import Scroll from "../../components/Scroll";
import PageHeaders from "../../components/PageHeaders";
import Modal from "../../components/Modal";
import { LS } from "../../Data";
import LS1 from "../../images/LS/WEB-LS1-RAY-3838-249kb.jpg";
import { Container } from "../Latf/styles";

import I1 from "../../images/CAUC/1.jpg";

const Lightscapes = () => {
  const ref = useRef();
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: ref.current,
      smooth: true,
      direction: "horizontal",
      smartphone: {
        smooth: true,
        direction: "horizontal",
      },
      tablet: {
        smooth: true,
        direction: "horizontal",
      },
    });
  });

  const openModal = (id) => {
    setSelected(id);
    setShowModal((prev) => !prev);
  };
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          src={selected.img}
          alt={selected.i}
        />
      </Modal>

      <div data-scroll-container ref={ref}>
        <div style={{ display: "flex" }}>
          <div
            data-scroll-speed="-10"
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              whiteSpace: "normal",
            }}
          >
            <p style={{ font: "4vw Hidden Focus", color: "#431e57" }}>
              Lightscapes
            </p>
          </div>

          <div
            style={{
              width: "100vw",
              display: "flex",
              font: "16px/26px Kumbh Sans",
              color: "#331c65",
              whiteSpace: "normal",
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <p style={{ width: "40%", margin: "auto" }}>
              I began taking "portraits" of flowers in the Spring of 2019.  By
              summer, they had grown into a body of work called{" "}
              <Link to="look-at-the-flowers">"Look at the Flowers..."</Link>{" "}
              and, in the fall, became the subject of four local exhibits.  As
              winter unfolded, I began to wonder what would show up through the
              lens come Spring.  Would the 2020 blossoms look the same?
            </p>
            <br />
            <p style={{ width: "40%", margin: "auto" }}>
              "Homage to Monet" appeared on the first photo-shoot of Spring, and
              radiated the answer: the possibilities, even within the confines
              of my small garden, are infinite. 
            </p>
            <br />
            <p style={{ width: "40%", margin: "auto" }}>
              The visual feel of this image and of others soon to follow is
              decidedly watercolor.  Since the distinctive medium for all these
              images is light, I've settled on a new name to describe them:
              "Lightscapes."
            </p>
          </div>

          <IntroContainer>
            <ImageWrapper>
              <img src={LS1} width={"100%"} alt={LS1} />
              <FigCaption>"Homage to Monet"</FigCaption>
            </ImageWrapper>
          </IntroContainer>

          {LS.map((el, i) => (
            <Container
              key={i}
              style={
                el.text !== ""
                  ? { backgroundColor: "antiquewhite" }
                  : { backgroundColor: "none" }
              }
            >
              <Wrapper className="column">
                <img
                  onClick={() => openModal(el)}
                  src={el.img}
                  alt={i.img}
                  style={el.css}
                />
                {el.text === "" ? (
                  <p>{el.text}</p>
                ) : (
                  <FigCaption>"{el.text}"</FigCaption>
                )}
              </Wrapper>
            </Container>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightscapes;
