import { motion } from "framer-motion";
import styled from "styled-components";

import ImageSlider from "../../components/imageSlider";
import WhoMe from "../../images/WHYNOW/WEB-9574-252kb--Who-Me.jpg";
import Leather from "../../images/WHYNOW/Leather.jpg";
import { WNData } from "./data";
import { PageTransition } from "../../generalStyles";
import {
  LetterHead,
  Title,
  Block1,
  P,
  Img,
  ImageWrapper,
  TextWrapper,
  CenterTextWrapper,
  PStyled,
} from "./styles";

const WhatNow = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={PageTransition}
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Title>Why Now</Title>

      <Block1>
        <ImageWrapper>
          <Img src={WhoMe} alt="Who-Me" />
        </ImageWrapper>

        <TextWrapper>
          <P style={{ color: "#301B3C" }}>
            <LetterHead>In</LetterHead> the early Spring of 2019, I picked up
            the camera again after a multi year break. Something magical
            happened: the pictures came to life and began to school me. Image
            after image, the shoots of new life revealed what I had been
            searching for over the years when I stood behind the lens.
          </P>
        </TextWrapper>
      </Block1>

      {/* <div style={{ margin: "auto" }}> */}
      <CenterTextWrapper>
        <P style={{ color: "#6A761D" }}>
          The unfolding leaves and blossoms showed form emerging from the deep,
          light piercing dark and exploding into color. They told their story of
          creation and, by letting me stand witness, told me something of my
          own.
        </P>
      </CenterTextWrapper>
      <CenterTextWrapper>
        <P style={{ color: "#301B3C" }}>
          So did the Spring of 2019 mark a turning point in my journey, and the
          start of a new post retirement adventure. The search had woven like a
          thread through the story of my years: from parochial grade school
          through catholic seminary, from running the family business through
          personal relationships and marriage, from early stock market
          speculations through a thirty year career on Wall Street and Bay
          Street.
        </P>
      </CenterTextWrapper>
      {/* </div> */}

      <div
        style={{
          margin: "16% auto",
          backgroundColor: "white",
          padding: "16% 0 10%",
        }}
      >
        <ImageSlider
          styles={{
            display: " flex",
            margin: "auto",
            justifyContent: "space-between",
            position: "absolute",
            bottom: "10%",
            width: " 90%",
          }}
          slides={WNData}
        />
      </div>

      <CenterTextWrapper>
        <P style={{ color: "#6A761D" }}>
          I retired in October, 2013. Now I could devote serious time and effort
          to following my inner voices, especially those related to taking
          pictures and singing. As expressed in the program for my corporate
          retirement dinner:
        </P>
      </CenterTextWrapper>
      <CenterTextWrapper>
        <PStyled>
          Technical Analysis combines elements of pattern recognition, both in
          mathematics and in human behavior. These elements are very much at
          play in Ray’s two passionate avocations: photography and singing *
          both classical repertoire and the Great American Songbook.
        </PStyled>
      </CenterTextWrapper>

      <CenterTextWrapper>
        <P>
          But I wasn’t ready yet. Although life’s beauty ran riot around me, the
          inner eye could not yet hold it in focus. The opaqueness manifested
          physically as well. Muscular constrictions born of a lifetime’s worth
          of striving and fight or flight duality kept my voice from sounding
          freely the crystalline emotion of our deepest song.
        </P>
      </CenterTextWrapper>
      <CenterTextWrapper>
        <P style={{ color: "#6A761D" }}>
          Happily, since the Spring of 2019 the vocal knot has steadily
          loosened. And, as I approach the seventh anniversary of my official
          retirement, both body and spirit have near fully recycled. I look
          forward to a time soon when I will sing for you…
        </P>
      </CenterTextWrapper>

      <img style={{ width: "100%" }} src={Leather} alt="Leather Jacket" />
    </motion.div>
  );
};

export default WhatNow;
