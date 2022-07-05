import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyled = styled.button`
  background: ${(props) => (props.contained ? "#78ffd6" : "white")};
  color: ${(props) => (props.contained ? "white" : "#78ffd6")};
  cursor: pointer;
  :hover {
    transition: all 0.3s;
    opacity: 0.8;
  }
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #78ffd6;
  border-radius: 3px;
`;

export default function Button({ contained, label, onClick }) {
  return (
    <ButtonStyled contained={contained} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
}

Button.propTypes = {
  contained: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  contained: false,
  label: "",
  onClick: () => { }
};
