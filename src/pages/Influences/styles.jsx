import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../generalStyles";

export const Heading = styled.h1`
	font: 24px/40px Hidden Focus;
	letterSpacing: 1.44;
	color: #F9EFFF;
	width: 80%;
	margin: auto;
	padding: 20px 0px 8px 0px;
	@media ${device.small} {
		padding: 8% 0px 8px 0px;
		font: 40px/40px Hidden Focus;
	}
`

export const PairWrapper = styled.div`
padding: 2%;
@media ${device.small} {
	// padding: 6% 8%;
}
`

export const Dot = styled.div`
  background: ${({ selected, past }) =>
		selected
			? `transparent linear-gradient(180deg, #B3C53F 0%, #444B18 100%) 0% 0% no-repeat padding-box;`
			: past
				? `transparent linear-gradient(180deg, #8A33B9 0%, #531F6F 100%) 0% 0% no-repeat padding-box;`
				: `#14091A 0% 0% no-repeat padding-box`};
     
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: ${({ selected, past }) =>
		selected ? `solid 1px #B3C53F` : past ? `solid 1px #8a33b9` : `solid 1px #666666`};
  position: absolute;
  top: 36px;
`;

export const Year = styled.span`
  font: 500 14px Kumbh Sans;
  color: #b3c53f;
  position: absolute;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  top: 50px;
`;

export const InfluencesName = styled.h1`
font: 30px/46px "Mrs Saint Delafield";
margin: 0;
@media ${device.small} {
	font: 40px/50px "Mrs Saint Delafield";
}
`
export const InfluencesTextWrapper = styled.div`
height: 80%;
overflow: scroll;
@media ${device.small} {
	height: 88%;
}

`
export const InfluencesText = styled.span`
  font: 300 14px / 18px "Kumbh Sans";
  overflow: scroll;
  height: 40%;
	@media ${device.small} {
		font: 300 16px / 20px "Kumbh Sans";
  }
	`