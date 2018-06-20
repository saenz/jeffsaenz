import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
//import '../styles/global'
import theme1 from '../styles/theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import favicon from '../images/favicon.ico'
import styled, {css} from 'react-emotion'
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming'
//import SEO from '../components/SEO';
import theme from '../utils/theme';
import { media } from '../utils/media';
import Container from '../components/Container'
import BreadCrumb from "../components/BreadCrumb"
import BreadCrumbItem from "../components/BreadCrumbItem"
import Link from 'gatsby-link'

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    //@media ${media.sm} {
    //  font-size: 14px;
    //}
  }
  a {
    color: ${theme.dark};
    text-decoration: none;
    transition: all ${theme.transitionTime};
  }
  a:hover {
    color: ${theme.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }
  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  ol, ul {
    list-style-type: none;
  }
`

const Template = (props) => {

  const {
    location
  } = props

  const Crumbs = ({pathName}) => {

    let crumbs = [{ path: "/", label: "Home" }]
    
    if (pathName !== "/") {
      let combined = "",
          path = pathName.replace(/^\//,"")
      
      path.split("/").forEach((part) => {
        combined += "/" + part
        crumbs.push({ 
          path: combined, 
          label: part.charAt(0).toUpperCase() + part.substring(1)
        })
      })
    }

    const listItems = crumbs.map((crumb) => {
      return (
        <BreadCrumbItem key={crumb.path}>
          <Link to={crumb.path}>{crumb.label}</Link>
        </BreadCrumbItem>
      )
    })
    
    return (
      <BreadCrumb>
        {listItems}
      </BreadCrumb>
    )
  }

  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
      </Helmet>

      <Container>
        <div>
        <ThemeProvider theme={theme1}>
          <div>

            <Header />

            <Crumbs pathName={location.pathname}/>

            {props.children()}
          </div>
        </ThemeProvider>
        {/* Footer placed in seperate ThemeProvider to avoid Rendering an extra DIV in HTML output  */}
        <ThemeProvider theme={theme1}>
          <Footer />
        </ThemeProvider>
        </div>
      </Container>
    </div>
  )
}

export default Template
