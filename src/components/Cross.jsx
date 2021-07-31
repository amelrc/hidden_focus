import Top from "../images/SVG/HF_Menu_Top.svg";
import Btm from "../images/SVG/HF_Menu_Btm.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
`;

const Img = styled.img`
  margin: 2px 4px 2px 0;
`;

const Cross = () => {
  return (
    <Wrapper>
      <Img src={Top} alt="top" />
      <img src={Btm} alt="btm" />
    </Wrapper>
  );
};

export default Cross;
