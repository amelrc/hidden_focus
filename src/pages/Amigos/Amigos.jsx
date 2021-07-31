import React, { useState, useEffect, useRef } from "react";
import { useViewportScroll, useTransform } from "framer-motion";
import locomotiveScroll from "locomotive-scroll";

import Modal from "../../components/Modal";
import PageHeaders from "../../components/PageHeaders";
import Scroll from "../../components/Scroll";
import { Container, Wrapper } from "../Latf/styles";
import { Left, Right, IntroContainer } from "./styles";
import { PageOne, PageTwo, Expo, FirstBlock } from "./dataAmigos";
import { WrapperIntroText } from "../Lightscapes/styles";

import I1 from "../../images/CAUC/1.jpg";
import I2 from "../../images/CAUC/2.jpg";
import I3 from "../../images/CAUC/3.jpg";
import I4 from "../../images/CAUC/4.jpg";
import I5 from "../../images/CAUC/5.jpg";

import I6 from "../../images/CAUC/6.jpg";
import I7 from "../../images/CAUC/7.jpg";
import I8 from "../../images/CAUC/8.jpg";
import I9 from "../../images/CAUC/9.jpg";

import {
  AnimationWrapper,
  AnimatedImage,
  HeaderWrapper,
  ImageWrapper,
  H1,
} from "./styles";

// import I0 from "../../images/CAUC/WEB-8704-250kb.jpg";
import Image from "../../components/Image";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Amigos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);

  const { scrollYProgress } = useViewportScroll();
  const ref = useRef();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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

  const openModal = (e) => {
    setSelected(e.target.src);
    setShowModal((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          src={selected}
          alt={selected}
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
              Quatro Amigos: Una Cuba
            </p>
          </div>

          <div style={{ height: "100vh", width: "30vw" }}>
            <img
              style={{ height: "50%" }}
              src={I1}
              alt="kadhjs"
              onClick={(e) => openModal(e)}
            />
          </div>
          <div
            style={{
              height: "100vh",
              width: "60vw",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <img
              style={{ height: "50%" }}
              src={I2}
              alt="kadhjs"
              onClick={(e) => openModal(e)}
            />
          </div>
          <div
            style={{
              height: "100vh",
              width: "70vw",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "60%" }}
              src={I3}
              alt="kadhjs"
              onClick={(e) => openModal(e)}
            />
          </div>
          <div style={{ height: "100vh", width: "30vw", display: "flex" }}>
            <img
              style={{ height: "30%" }}
              src={I4}
              alt="kadhjs"
              onClick={(e) => openModal(e)}
            />
          </div>
          <div
            style={{
              height: "100vh",
              width: "50vw",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <img
              style={{ height: "50%" }}
              src={I5}
              alt="kadhjs"
              onClick={(e) => openModal(e)}
            />
          </div>

          <div
            style={{
              height: "100vh",
              width: "50vw",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "50%" }}
              src={I6}
              alt="kadhjs"
              onClick={(e) => openModal(e)}
            />
          </div>

          <div
            style={{
              height: "100vh",
              width: "70vw",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "80%" }}
              src={I7}
              alt="kadhjs"
              onClick={(e) => openModal(e)}
            />
          </div>

          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                whiteSpace: "normal",
              }}
            >
              <p
                style={{
                  font: "16px/20px Kumbh Sans",
                  color: "#431e57",
                  margin: "10% auto",
                }}
              >
                Four artists, three Cuban and one Canadian, have come together
                to share the work they have rendered in painting, paper and
                photography. The expo celebrates the inner life of our cities
                and the bountiful nature that nurtures and surrounds them.
                Together, they invite us to reflect on the broad range of
                experiences that we share in common, and that lay the foundation
                for a life lived in harmony.
              </p>
              <img
                style={{ width: "100%" }}
                src={I8}
                alt="kadhjs"
                onClick={(e) => openModal(e)}
              />
            </div>
          </div>

          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                whiteSpace: "normal",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  font: "16px/20px Kumbh Sans",
                  color: "#431e57",
                  margin: "10% auto",
                }}
              >
                Lilia Ulla was a teenager at the time of the Revolution, and has
                experienced firsthand the remaking of Cuban society as it
                unfolded over the decades. Through her eyes, we could still
                catch a glimpse of Havana’s former splendor.
                <br />
                <br />
                Affectionately known as Dr. Lilly, she introduced Lawrence and
                me to many of her friends, including Amel, Boris and Abel. New
                friendships quickly developed, and Lilia happily and capably
                took charge of making this expo happen.
              </p>
              <img
                style={{ width: "70%" }}
                src={I9}
                alt="kadhjs"
                onClick={(e) => openModal(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amigos;
