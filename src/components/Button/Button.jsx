import React from 'react';
// import PropTypes from 'prop-types';
import { CustomButton } from './Button.styled';

function Button({ text, type, onClick }) {
  return (
    <CustomButton type={type} onClick={onClick}>
      {text}
    </CustomButton>
  );
}

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
// }

export default Button;
