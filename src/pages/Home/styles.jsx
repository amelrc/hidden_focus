import styled from "styled-components";
import { device } from "../../generalStyles";

export const HomePage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HeaderWrapper = styled.div`
  width: 78.5%;
  display: flex;
  flex-direction: column;
  align-self: center;
  z-index: 1;
`;
export const HeaderHome = styled.h1`
  font: 40px/20px Hidden Focus;
  color: #331c65;
  text-transform: capitalize;
  margin: 0;
  @media ${device.tablet} {
    font: 6vw/4vw Hidden Focus;
  }
`;
export const SubTitle = styled.h4`
  font: 14px/26px Kumbh Sans;
  color: #331c65;
  margin: 8px auto -28px 6px;
  @media ${device.tablet} {
    font: 2vw/2vw Kumbh Sans;
    margin: 14px auto -34px 2px;
  }
  @media ${device.small} {
    margin: 14px auto -4% 18px;
  }
`;
export const Phrase = styled.h3`
  font: 24px/24px Mrs Saint Delafield;
  color: #1c161f;
  margin: -30px 10px;
  align-self: flex-end;
  z-index: 1;
  @media ${device.tablet} {
    font: 30px/30px Mrs Saint Delafield;
    align-self: center;
    margin: -40px 0 0 46%;
  }
  @media ${device.small} {
    font: 3vw/3vw Mrs Saint Delafield;
    margin: -60px 0 0 49%;
  }
`;
