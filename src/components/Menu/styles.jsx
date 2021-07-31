import styled from "styled-components";
import { device } from "../../generalStyles";

export const HFlogo = styled.img`
  width: 14px;
  cursor: pointer;
`;

export const HeaderMenu = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 8px 24px;
  @media ${device.medium} {
    padding: 0 4%;
  }
`;

export const InnerHeader = styled.div`
  position: relative;
  z-index: 10;
  // height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
