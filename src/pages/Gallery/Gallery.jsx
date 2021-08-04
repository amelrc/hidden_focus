import { Link } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Slideshow, Slide, TextoSlide } from "../../components/Slideshow";
import { museum } from "../../Data";
import Image from "../../components/Image";
import { Hover, P, Title } from "./styles";
import AutoSlides from "../../components/autoSlider";
import styled from "styled-components";

import img1 from '../../images/CAUC/1.jpg'
import img2 from '../../images/CAUC/2.jpg'
import img3 from '../../images/CAUC/3.jpg'
import img4 from '../../images/CAUC/4.jpg'

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
              style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr' }}
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
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

                    <Title>{room.floors}</Title>

                    <Slideshow
                      style={{ overflow: 'hidden', width: '50%' }}
                      controles={false}
                      autoplay={true}
                      velocidad='500'
                      intervalo='2000'>
                      {room.rooms.map((r, i) => {
                        return (<Slide>
                          {/* <Link to={`menu/${room.floors}`}> */}
                          <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src={r.introImg} alt="" />
                          {/* </Link> */}
                        </Slide>)
                      })}
                    </Slideshow>
                  </div>


                ) : null
              )}
            </motion.div>
          </motion.div>

          <main>
            <Slideshow style={{ width: '20%', overflow: 'hidden' }}
              controles={false}
              autoplay={true}
              velocidad="500"
              intervalo="6000"
            >
              <Link to='/menu/theme'>
                <Slide>
                  <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src={img1} alt="" />
                </Slide>
              </Link>
              <Slide>
                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src={img2} alt="" />
              </Slide>
            </Slideshow>
          </main>

        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout >
  );
};

export default Loader;
