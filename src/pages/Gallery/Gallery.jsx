import { Link } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Slideshow, Slide, TextoSlide } from "../../components/Slideshow";
import { museum } from "../../Data";
import Image from "../../components/Image";
import { Hover, P, Title } from "./styles";
import AutoSlides from "../../components/autoSlider";
import styled from "styled-components";

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const Loader = ({ match }) => {
  const {
    params: { topic },
  } = match;

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <motion.div key="loader">
          <motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{ display: "flex", height: "100vh" }}
            >
              {museum.map((room) =>
                room.floors === topic ? (
                  room.rooms.map((r, i) => (
                    <motion.div
                      key={i}
                      variants={item}
                      className={`image-block image-${r.id} `}
                    >
                      <Hover className="img-hover-zoom">
                        <Link to={`/${r.url}`}>
                          <Image pic={r.introImg} name={r.name} />
                          <P>{r.name}</P>
                        </Link>
                      </Hover>
                    </motion.div>
                  ))
                ) : match.path === "/gallery" ? (
                  <div style={{ margin: "4%" }}>
                    <Link to={`menu/${room.floors}`}>
                      <Title>{room.floors}</Title>
                      <AutoSlides
                        slides={room.rooms.map((img) => img.introImg)}
                      />
                    </Link>
                  </div>
                ) : null
              )}
            </motion.div>
          </motion.div>

          <main>
            <Titulo>Productos Destacados</Titulo>
            <Slideshow controles={true}>
              <Slide>
                <a href="https://www.falconmaters.com">
                  <img src={img1} alt="" />
                </a>
                <TextoSlide>
                  <p>15% descuento en productos Apple</p>
                </TextoSlide>
              </Slide>
              <Slide>
                <a href="https://www.falconmaters.com">
                  <img src={img2} alt="" />
                </a>
                <TextoSlide>
                  <p>15% descuento en productos Apple</p>
                </TextoSlide>
              </Slide>
              <Slide>
                <a href="https://www.falconmaters.com">
                  <img src={img3} alt="" />
                </a>
                <TextoSlide>
                  <p>15% descuento en productos Apple</p>
                </TextoSlide>
              </Slide>
              <Slide>
                <a href="https://www.falconmaters.com">
                  <img src={img4} alt="" />
                </a>
                <TextoSlide>
                  <p>15% descuento en productos Apple</p>
                </TextoSlide>
              </Slide>
            </Slideshow>

            <Titulo>Productos Destacados</Titulo>
            <Slideshow
              controles={false}
              autoplay={true}
              velocidad="500"
              intervalo="3000"
            >
              <Slide>
                <a href="https://www.falconmaters.com">
                  <img src={img1} alt="" />
                </a>
                <TextoSlide colorFondo="navy">
                  <p>15% descuento en productos Apple</p>
                </TextoSlide>
              </Slide>
              <Slide>
                <a href="https://www.falconmaters.com">
                  <img src={img2} alt="" />
                </a>
                <TextoSlide>
                  <p>15% descuento en productos Apple</p>
                </TextoSlide>
              </Slide>
            </Slideshow>
          </main>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Loader;
