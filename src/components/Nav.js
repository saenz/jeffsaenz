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


const header = css`
  margin-top: 10px;
  padding: 0 0 0 0;
`
const brand = css`
  background-color: #375a7f; 
  padding: 8px 0;
`
const nav = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #e2e2e2;
  margin-bottom: 0;
  padding: .5rem 0 .4rem 0;
  border: 1px solid #c1bbbb;
`
const socialList = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  li {
    margin: 0;
    padding-right: .75rem;
    svg {
      opacity: 0.5;
      transition: opacity 0.15s ease-in;
      transition: color 0.15s ease-in;
      &:hover {
        text-decoration: none;
        box-shadow: none;
        opacity: 1;
        transition: opacity 0.15s ease-in;
      }
    }
  }
`
const navList = css`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  li {
    margin:0;
    padding-right: 1rem;
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    transition: color 0.15s ease-in;
    &:hover {
      text-decoration: none;
      box-shadow: none;
      opacity: 1;
      transition: opacity 0.15s ease-in;
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

const Nav = () => {
  return (
    <header className={header}>

      <div className={brand}>
        <Link to="/">
          <div className={bio}>
            <div style={{width: "6rem", textAlign: "right"}}>Jeff</div>
            <Avatar img={avatarImg} />
            <div>Saenz</div>
          </div>
        </Link>
      </div>

      <nav className={nav}>
        <div>
          <ul className={socialList}>
            <li className="icon">
              <a
                  title="Link to our Twitter account"
                  href='https://twitter.com/dstppluto'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter color={"rgba(0,0,0,0.7)"} size={24} />
              </a>
            </li>
            <li className="icon">              
              <a
                title="Link to our Instagram account"
                href='https://www.instagram.com/handymanio/'
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram color={"rgba(0,0,0,0.7)"} size={24}/>
              </a>
            </li>
            <li className="icon">
              <a
                  title="Link to our LinkedIn account"
                  href='https://www.linkedin.com/in/jeffsaenz/'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn color={"rgba(0,0,0,0.7)"} size={24} />
              </a>
            </li>
            <li className="icon"> 
              <a
                title="Link to our Github account"
                href='https://github.com/saenz'
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github color={"rgba(0,0,0,0.7)"} size={24}/>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className={navList}>
            <li> | </li>
            <li>          
              <Link to="/about">
                <span className="active">About</span>
              </Link>
            </li>
            <li> | </li>
            <li>
              <Link to="/contact">
                <span className="active">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>


    </header>
  )
}

export default Nav