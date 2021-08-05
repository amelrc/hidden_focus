import { Link } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { museum } from "../../Data";
import Image from "../../components/Image";
import {
  Hover,
  P,
  Title,
  Container,
  GalleryWrapper,
  LinkWrapper,
} from "./styles";
import AutoSlides from "../../components/autoSlider";
import styled from "styled-components";

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
          <Container
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
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
                <GalleryWrapper>
                  <LinkWrapper to={`/menu/${room.floors}`}>
                    <Title>{room.floors}</Title>
                    <AutoSlides
                      arrIndex={museum.indexOf(room)}
                      slides={room.rooms.map((r) => r.introImg)}
                    />
                  </LinkWrapper>
                </GalleryWrapper>
              ) : null
            )}
          </Container>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Loader;
