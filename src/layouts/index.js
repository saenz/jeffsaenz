import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'

//import '../styles/global'
import theme1 from '../styles/theme'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import favicon from '../images/favicon.ico'

import styled from 'react-emotion'
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming'
//import SEO from '../components/SEO';

import theme from '../utils/theme';
import { media } from '../utils/media';

import Container from '../components/Container'

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
`;

const Template = ({ children }) => {
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
            <Nav />
            {children()}
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
