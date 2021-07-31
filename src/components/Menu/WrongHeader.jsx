import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "../WrongHamburger";
import styled from "styled-components";
import Logo from "../../images/SVG/HF_Official_Logo.svg";
import { HeaderMenu, InnerHeader, Wrapper, HFlogo } from "./styles";
import Cross from "../Cross";

const MenuState = styled.div`
  color: ${(open) => (open ? `#8b33b9` : `black`)};
`;

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: <Cross />,
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);
  console.log(state);
  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: <Cross /> });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: <Cross />,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <HeaderMenu>
      <Wrapper>
        <InnerHeader>
          <Link to="/">
            <HFlogo src={Logo} alt="logo" />
          </Link>
          <MenuState
            disabled={disabled}
            open={state.clicked}
            onClick={handleMenu}
          >
            {state.menuName}
          </MenuState>
        </InnerHeader>
      </Wrapper>
      <Hamburger state={state} />
    </HeaderMenu>
  );
};

export default withRouter(Header);
