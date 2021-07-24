import { useState } from "react";
import { useViewportScroll, useTransform } from "framer-motion";
import Image from "../../components/Image";
import Modal from "../../components/Modal";
import { AnimatedImage, AnimationWrapper, HeaderWrapper } from "../Latf/styles";
import { ImageWrapper } from "../Lightscapes/styles";
import { dataNewYork } from "./dataNewYork";
import I1 from "../../images/NY/1.jpg";

const NewYork = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const openModal = (e) => {
    setSelected(e);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          src={selected.pic}
          alt={selected.i}
        />
      </Modal>

      <AnimationWrapper>
        <HeaderWrapper>
          <h1
            animate={{
              opacity: 1,
              bottom: 0,
              alignItems: "flex-end",
              transition: { delay: 1, ...transition },
            }}
            style={{ opacity: opacity }}
          >
            Look at the Flowers
          </h1>
        </HeaderWrapper>
        <ImageWrapper>
          <AnimatedImage
            style={{ scale: scale }}
            animate={{
              right: "30%",
              width: "60%",
              transition: { delay: 0.2, ...transition },
            }}
            src={I1}
            alt={I1}
          />
        </ImageWrapper>
      </AnimationWrapper>

      <div style={{ marginTop: 560 }}>
        {dataNewYork.map((el, i) => {
          return (
            <Image
              key={i}
              id={el.i}
              pic={el.pic}
              imgWidth={el.imgWidth}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionX={el.positionX}
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
          );
        })}
      </div>
    </>
  );
};

export default NewYork;
