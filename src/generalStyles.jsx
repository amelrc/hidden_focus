import styled from 'styled-components'
import { motion } from 'framer-motion'

export const device = {
  tablet: `(min-width: 768px)`,
  small: `(min-width: 1024px)`,
  medium: `(min-width: 1366px)`,
  large: `(min-width: 1920px)`,
};

export const PageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const AnimationWrapper = styled.div`
  overflow: hidden;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  height: 50vh;
`;
export const ImageWrapper = styled.div`
  position: relative;
  height: 50vh;
  // width: 100%;
  @media ${device.tablet} {
    // height: 70vh;
  }
`;

export const H1 = styled(motion.h1)`
  height: 50vh;
  width: 100%;
  justify-content: center;
  display: flex;
  font: 40px Hidden Focus;
  z-index: 1;
  color: #331c65;
  // color: #fff;
  opacity: 0;
  bottom: 10%;
  position: absolute;
  @media ${device.tablet} {
    font: 80px Hidden Focus;
    margin-bottom: 10%;
  }
  @media ${device.medium} {
    font: 120px Hidden Focus;
    margin-bottom: 10%;
  }
`;

export const AnimatedImage = styled(motion.img)`
  width: 30vw;
  left: 16%;
  bottom: 20%; //aparently bigger than starting point in galleries
  position: absolute;
`;