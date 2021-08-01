import { Link } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { museum } from "../../Data";
import Image from "../../components/Image";
import { Hover, P, Title } from "./styles";
import AutoSlides from "../../components/autoSlider";

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
                    {/* <Link to={room.rooms.map((r) => `/${r.url}`)}> */}
                    <Title>{room.floors}</Title>
                    <AutoSlides
                      slides={room.rooms.map((img) => img.introImg)}
                    />
                    {/* </Link> */}
                  </div>
                ) : // room.rooms.map((r, i) => (
                // <motion.div
                //   key={i}
                //   variants={item}
                //   className={`image-block image-${r.id} `}
                // >
                //   <Hover className="img-hover-zoom">
                //     <Link to={`/${r.url}`}>
                //       <Image pic={r.introImg} name={r.name} />
                //       <P>{r.name}</P>
                //     </Link>
                //   </Hover>
                // </motion.div>
                // ))
                null
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Loader;
