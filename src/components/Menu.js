import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'
import theme from '../utils/theme';
import config from '../utils/siteConfig'

import avatar from "../images/jeff.jpg";


const Nav = css`
  width: 100%;
  //max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    //border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const header = css`
  // background: ${theme.primary};
  // width: 100%;
  // display: flex;
  // flex-wrap: wrap;
  // align-items: center;
  // position: relative;
  // padding: 0;
  // //top: 0;
  // width: 100%;
  // justify-content: space-between;
  // transition: padding 0.5s;
  // background-color: ${theme.light} !important;

  align-items: center;
  justify-content: center;
  background-color: ${theme.light};
  display: flex;
  height: 80px; //${theme.header.height.default};
  position: relative;
  top: 0;
  width: 100%;
  align-items: center;
  h4 {
    margin: 0 0 5px 0;
    color: ${theme.color.white};
  }
  h5 {
    letter-spacing: 0;
    margin: 0;
    color: ${theme.color.white};
  }
`

const navBar = css`
  //width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  background-color: ${theme.light} !important;
  h4 {
    margin: 0 0 5px 0;
    color: ${theme.color.white};
  }
  h5 {
    letter-spacing: 0;
    margin: 0;
    color: ${theme.color.white};
  }
`

const logoType = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const logo = css`
  border-radius: 65% 75%;
  border: 1px solid #eee;
  display: inline-block;
  margin: 10px 15px;
  overflow: hidden;
  transition: all 0.5s;
  height: 60px;
  width: 60px;
  img {
    width: 100%;
  }
`

const navBarBrand = css`
  text-align: left;
  flex-direction: row;
  flex-shrink: 0;
  width: auto;
`

const Menu = () => {
  return (
      <header className={header}>
          <Link to="/" className={logoType}>
            <div className={logo}>
              <img src={avatar} alt={config.siteTitle} />
            </div>
            <div>
              <h4>{config.headerTitle}</h4>
              <h5>{config.headerSubTitle}</h5>
            </div>
          </Link>
          {/*<Link to="/" className={logoLink}>
            <div className={logo}>
              <img src={avatar} alt={config.siteTitle} />
            </div>
            <div>
              <h4>{config.headerTitle}</h4>
              <h5>{config.headerSubTitle}</h5>
            </div>
          </Link>
          *?}
        {/*<nav className={navBar}>

          <ul>
            <li>
              <Link to="/about/" activeStyle={activeLinkStyle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact/" activeStyle={activeLinkStyle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>*/}
      </header>
  )
}

/*<Header>
  <Nav>
    <ul>
      <li>
        <Link to="/" exact activeStyle={activeLinkStyle}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about/" activeStyle={activeLinkStyle}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact/" activeStyle={activeLinkStyle}>
          Contact
        </Link>
      </li>
    </ul>
  </Nav>
</Header>*/

export default Menu
