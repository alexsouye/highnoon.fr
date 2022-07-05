import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Navigation banner
const NavigationStyled = styled.nav`
  height: 70px;
  width: 100%;
  background: #1c1c1c;
  top: 0;
  position: fixed;
`;

const Navigation = ({ children }) => (
  <NavigationStyled>{children}</NavigationStyled>
);

Navigation.propTypes = {
  background: PropTypes.string
};

Navigation.defaultProps = {
  background: "#1c1c1c"
};

export default Navigation;
