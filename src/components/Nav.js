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
const nav = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  background-color: ${theme.color.white};
  padding: 4px 0;
  margin-top: 5px;
  div {
    flex-grow: 0;
  }
  button {
    background-color: #fff;
    border: none;
    border-radius: 8px;
    transition-duration: 0.4s;
    font-size: .75rem;
    .active {
      background-color:#e2e2e2;
    }
    &:hover {
      background-color: #375a7f; 
      color: white;
    }
  }
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
  font-size: 1.75em;
  color: ${theme.color.white};
  div {
    //border: 1px solid green;
    &:first-child {
      padding-right: 8px;
    }
    &:last-child {
      padding-left: 8px;
    }
  }
`

const socialList = css`
  border: 1px solid #bab5b5;
  padding: 4px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgba(0,0,0,0.7);
  //background-color: rgba(255, 255, 255, 0.3);
  //opacity: .5;
  background-color: #e2e2e2;
  div {
    font-size: 16px;
    &:not(:last-child) {
      padding-right: 1rem;
    }
  }
  .icon {
    height: 18px;
  }
`

const header = css`
  //background-color: #375a7f;
  margin-top: 10px;
  padding: 0 0 0 0;
`

const Nav = () => {
  return (
    <header className={header}>

      <nav className={nav} style={{backgroundColor: "#fff"}}>
        <div>
          <Link to="/">
            <button className="active">Home</button>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
        {/*<div className={spacer}>
          <span>J</span><span></span><span>S</span>
        </div>*/}
        <div><button>Stories</button></div>
        <div><button>About</button></div>
      </nav>

      <div style={{backgroundColor: "#375a7f", padding: "8px 0"}}>
        <Link to="/">
          <div className={bio}>
            <div>Jeff</div>
            <Avatar img={avatarImg} />
            <div>Saenz</div>
          </div>
        </Link>
      </div>

      <div className={socialList}>
        <div className="icon">
          <Twitter color={"rgba(0,0,0,0.7)"} size={18} />
        </div>
        <div className="icon">
          <Instagram color={"rgba(0,0,0,0.7)"} size={18}/>
        </div>
        <div>
          @jeffsaenz
        </div>
      </div>


    </header>
  )
}

export default Nav