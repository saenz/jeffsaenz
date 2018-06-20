import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import theme from '../utils/theme';
import config from '../utils/siteConfig'
import Twitter from 'react-feather/dist/icons/twitter';
import Github from 'react-feather/dist/icons/github';
import LinkedIn from 'react-feather/dist/icons/linkedin';

const topNav = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 0;
  padding: .5rem 0 .4rem 0;
  //width:100%;
`
const socialList = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  li {
    margin: 0;
    padding-right: 1rem;
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
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    transition: color 0.15s ease-in;
    &:hover {
      text-decoration: none;
      box-shadow: none;
      opacity: 1;
      transition: opacity 0.15s ease-in;
    }
    &:not(:last-child) {
      padding-right: 1rem;
    }
  }
`

const Nav = (props) => {
  return (
    <nav className={topNav}>
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
  )
}

export default Nav