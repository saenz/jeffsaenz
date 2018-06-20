import React from "react";
import PropTypes from "prop-types"
import styled, { css } from 'react-emotion'

const avatar = css`
  width: 60;
  height: 60px;
  border-radius: 50% 50%;
  border: 1px solid #e2e2e2;  
  margin-bottom:0;
`

const Avatar = ({image}) => {
  return (
      <img className={avatar} src={image} alt="site avatar" />
  )
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired
};

export default Avatar