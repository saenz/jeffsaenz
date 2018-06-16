import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'
import theme from '../utils/theme';
import config from '../utils/siteConfig'

import avatar from "../images/jeff.jpg";

const navBar = css`
  display: flex;
  margin-bottom: 1.5rem;
  background-color: ${theme.primary};
  padding: .5rem 1rem;
`
const navBarBrand = css`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  line-height: inherit;
  white-space: nowrap;
  color: ${theme.color.white};
  img {
    width: 60px;
    height: 60px;
    border-radius: 65% 75%;
    margin-right: 0.875rem;
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
  }
`

const Nav = () => {
  return (
  		<nav className={navBar}>
  			<Link to="/" className={navBarBrand}>
  				<img src={avatar} alt={config.siteTitle} />
          <p>
            <strong>Jeff Saenz</strong> <br/>
            <span>Web developer / pit bull papa</span>
          </p>
        </Link>
  		</nav>
  )
}

export default Nav