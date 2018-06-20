import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'
import theme from '../utils/theme';
import config from '../utils/siteConfig'
import Headroom from 'react-headroom'
import Avatar from '../components/Avatar'
import avatarImg from '../images/jeff.jpg'
import Twitter from 'react-feather/dist/icons/twitter';
import Instagram from 'react-feather/dist/icons/instagram';
import Github from 'react-feather/dist/icons/github';
import LinkedIn from 'react-feather/dist/icons/linkedin';
import Nav from '../components/Nav'

const header = css`
  margin-top: 10px;
  padding: 0 0 0 0;
`
const brand = css`
  background-color: #375a7f; 
  padding: 8px 0;
`

const spacer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${theme.color.green};
  //border-radius: 50% 50%;
  flex-grow: 1;
  span {
    &:nth-child(2) {
    background-color: ${theme.color.blue};
    width: 5px;
    //position: relative;
    //top: 10px;
  }
`

const bio = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin: 8px 0;
  font-size: 1.75rem;
  color: ${theme.color.white};
  div {
    &:first-child {
      padding-right: 1rem;
    }
    &:last-child {
      padding-left: 1rem;
    }
  }
`
const navContainer = css`
  background-color: #e2e2e2;
  border: 1px solid #c2c2c2;
`

const Header = (props) => {
  return (
    <header className={header}>

      <div className={brand}>
        <Link to="/">
          <div className={bio}>
            <div style={{width: "6rem", textAlign: "right"}}>Jeff</div>
            <Avatar image={avatarImg} />
            <div>Saenz</div>
          </div>
        </Link>
      </div>

      <div className={navContainer}>
        <Nav />
      </div>

    </header>
  )
}

export default Header