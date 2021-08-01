import styled from "styled-components";
import { device } from "../../generalStyles";

export const Container = styled.div`
  @media ${device.medium} {
    padding: 6% 8%;
    max-width: 1366px;
  }
`;

export const Title = styled.h1`
  font: 40px/40px Hidden Focus;
  color: #b3c53f;
  display: flex;
  padding-top: 60px;
  justify-content: center;
  @media ${device.medium} {
    font: 3vw/3vw Hidden Focus;
  }
`;

export const LetterHead = styled.span`
  font: 30px/20px Hidden Focus;
  color: transparent;
  -webkit-text-stroke: 1px #8a33b9;
`;

export const P = styled.p`
  font: 300 14px/20px Kumbh Sans;
  color: #301b3c;
  @media ${device.medium} {
    font: 300 16px/24px Kumbh Sans;
  }
`;

export const PStyled = styled.p`
  font: 32px/48px Mrs Saint Delafield;
  color: #301b3c;
  text-align: center;
`;

export const Img = styled.img`
  width: 72%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const TextWrapper = styled.div`
  width: 50%;
  padding: 16px;
`;

export const Block1 = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 60px auto;
  @media ${device.tablet} {
    margin: 10% auto;
    width: 80%;
  }
`;

export const CenterTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 40px auto;
`;
