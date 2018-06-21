import React from 'react'
import styled, {css} from 'react-emotion'
import Nav from '../components/Nav'

import ReactIcon from "../images/react-icon.svg"
import EmotionIcon from "../images/emotion.png"

const gatsbyImageBase64 =
  "base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTA2IDI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDYgMjgiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiNmZmZ9LnN0MXtmaWxsOiM2Mzl9PC9zdHlsZT48Zz48cGF0aCBkPSJNNjIuOSwxMmgyLjh2MTBoLTIuOHYtMS4zYy0xLDEuNS0yLjMsMS42LTMuMSwxLjZjLTMuMSwwLTUuMS0yLjQtNS4xLTUuM2MwLTMsMi01LjMsNC45LTUuM2MwLjgsMCwyLjMsMC4xLDMuMiwxLjZWMTJ6IE01Ny43LDE3YzAsMS42LDEuMSwyLjgsMi44LDIuOGMxLjYsMCwyLjgtMS4yLDIuOC0yLjhjMC0xLjYtMS4xLTIuOC0yLjgtMi44QzU4LjksMTQuMiw1Ny43LDE1LjQsNTcuNywxN3oiLz48cGF0aCBkPSJNNzEuMiwxNC40VjIyaC0yLjh2LTcuNmgtMS4xVjEyaDEuMVY4LjZoMi44VjEyaDEuOXYyLjRINzEuMnoiLz48cGF0aCBkPSJNNzkuNywxNC40Yy0wLjctMC42LTEuMy0wLjctMS42LTAuN2MtMC43LDAtMS4xLDAuMy0xLjEsMC44YzAsMC4zLDAuMSwwLjYsMC45LDAuOWwwLjcsMC4yYzAuOCwwLjMsMiwwLjYsMi41LDEuNCBjMC4zLDAuNCwwLjUsMSwwLjUsMS43YzAsMC45LTAuMywxLjgtMS4xLDIuNWMtMC44LDAuNy0xLjgsMS4xLTMsMS4xYy0yLjEsMC0zLjItMS0zLjktMS43bDEuNS0xLjdjMC42LDAuNiwxLjQsMS4yLDIuMiwxLjIgYzAuOCwwLDEuNC0wLjQsMS40LTEuMWMwLTAuNi0wLjUtMC45LTAuOS0xbC0wLjYtMC4yYy0wLjctMC4zLTEuNS0wLjYtMi4xLTEuMmMtMC41LTAuNS0wLjgtMS4xLTAuOC0xLjljMC0xLDAuNS0xLjgsMS0yLjMgYzAuOC0wLjYsMS44LTAuNywyLjYtMC43YzAuNywwLDEuOSwwLjEsMy4yLDEuMUw3OS43LDE0LjR6Ii8+PHBhdGggZD0iTTg1LjgsMTMuM2MxLTEuNCwyLjQtMS42LDMuMi0xLjZjMi45LDAsNC45LDIuMyw0LjksNS4zYzAsMy0yLDUuMy01LDUuM2MtMC42LDAtMi4xLTAuMS0zLjItMS42VjIySDgzVjUuMmgyLjhWMTMuM3ogTTg1LjUsMTdjMCwxLjYsMS4xLDIuOCwyLjgsMi44YzEuNiwwLDIuOC0xLjIsMi44LTIuOGMwLTEuNi0xLjEtMi44LTIuOC0yLjhDODYuNiwxNC4yLDg1LjUsMTUuNCw4NS41LDE3eiIvPjxwYXRoIGQ9Ik05OC41LDIwLjVMOTMuNywxMkg5N2wzLjEsNS43bDIuOC01LjdoMy4ybC04LDE1LjNoLTMuMkw5OC41LDIwLjV6Ii8+PHBhdGggZD0iTTU0LDEzLjdoLTIuOGMwLDAtNC4yLDAtNC4yLDB2Mi44aDMuN2MtMC42LDEuOS0yLDMuMi00LjYsMy4yYy0yLjksMC01LTIuNC01LTUuM1M0My4xLDksNDYsOWMxLjYsMCwzLjIsMC44LDQuMiwyLjEgbDIuMy0xLjVDNTEsNy41LDQ4LjYsNi4zLDQ2LDYuM2MtNC40LDAtOCwzLjYtOCw4LjFzMy40LDguMSw4LDguMXM4LTMuNiw4LTguMUM1NC4xLDE0LjEsNTQsMTMuOSw1NCwxMy43eiIvPjwvZz48Zz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUsMTRoLTd2Mmg0LjhjLTAuNywzLTIuOSw1LjUtNS44LDYuNUw1LjUsMTFjMS4yLTMuNSw0LjYtNiw4LjUtNmMzLDAsNS43LDEuNSw3LjQsMy44bDEuNS0xLjMgQzIwLjksNC44LDE3LjcsMywxNCwzQzguOCwzLDQuNCw2LjcsMy4zLDExLjZsMTMuMiwxMy4yQzIxLjMsMjMuNiwyNSwxOS4yLDI1LDE0eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zLDE0LjFjMCwyLjgsMS4xLDUuNSwzLjIsNy42YzIuMSwyLjEsNC45LDMuMiw3LjYsMy4yTDMsMTQuMXoiLz48L2c+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LDBDNi4zLDAsMCw2LjMsMCwxNHM2LjMsMTQsMTQsMTRzMTQtNi4zLDE0LTE0UzIxLjcsMCwxNCwweiBNNi4yLDIxLjhjLTIuMS0yLjEtMy4yLTQuOS0zLjItNy42TDEzLjksMjUgQzExLjEsMjQuOSw4LjMsMjMuOSw2LjIsMjEuOHogTTE2LjQsMjQuN0wzLjMsMTEuNkM0LjQsNi43LDguOCwzLDE0LDNjMy43LDAsNi45LDEuOCw4LjksNC41bC0xLjUsMS4zQzE5LjcsNi41LDE3LDUsMTQsNSBjLTMuOSwwLTcuMiwyLjUtOC41LDZMMTcsMjIuNWMyLjktMSw1LjEtMy41LDUuOC02LjVIMTh2LTJoN0MyNSwxOS4yLDIxLjMsMjMuNiwxNi40LDI0Ljd6Ii8+PC9nPjwvc3ZnPg==";
const emotionImageBase64 =
  "base64, iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFZklEQVQ4y1WUaUxUVxTHH6BN2qTRpGlN6Ic2MY1QRajaWJB9KYZFAR32bZCB2WAYEEG0gIIDgyyCIyCrbMMiMOyMyDYbW6XsWtBGoYs1 / dDQWNsKc//lPSqNJ7k5596c/++dd8/Jpaj/rMyvgPHl/jcMmL1/7geDEW39Wk7vhjaq96Wa1zN7X9BeUMmXWbzRdJ9vMqT9H9nPqJizPGrHeG6RjD/nGkrh0iaTVOlfnPVTwjweCXT6Jb4Wj2MmsSr+DtPCITIoUpTYcBzfo/NGk3uMaD+RNEC9ZWccvShMgonvRbRktgc3QBHcvLkkUJMlgYbM81T6rfV6kafBWsIsdOL++TTBJWM6vzehmSmiNKLgf+AER8l8qTWkmkdXMssdIcVnC0m1Tx3U7D6yyNeQBb4aW1Aa/s+qeAbjontL4Xz2HlpXIZQZ7MBkrJw34a6tO5tfjh3DDGdsYzotG3czPEgOS4bukGYsCFQ0dBscq/575fwUhmM6b9PCNfGsEftK+DalM7yeod/yu/7xRLTy5QxvED3+A+R5LY90tvuR7CN5KPbMRRe7DZPcAbIUpyMr4kkoY1t/VITVr3VG1ZvR+qqQm4ZvAQv9rxpPRQ29Go6So4EfRTrlIlJsX4bRPUUoM5egIjIVivA6jHGV5HvROBbOa9ZLIm6k5nlJ4mj9M8Hc9m83BVcwQXLA6b0atmpNfVGMrhpTfXRAClHsleC+cREWLnph7I4ZqqJEpNL/JtFwezceJ05hNLWHnhfDvGDJuzt3mONzZTsIpIz6/ZVTC6UxaK5gbdq4WkMaFIlW03y01QZA0+iKII8zhOvMI4rQ+o25OA1GU7ov0tKnWTNG7K9DKMrLxptycnGg5qLVTJdHQzpKyi7fQpu0bKM2LoEMXW6FVJyL1dGvsD6XjjtSXxRdOE2qAmVQ8XvQcaH+BK1rEVYb7lToY+9DjYUPMAfZrgU17fGpGHRib4x8JCeZkTfwRGsJfHsA+gkTYPlL8rTLYrMoPA41YUV1tEbpW2ggCUujnK1cKCrSjkPF2okYGNeOF5romIzSszl6+YEsksSpxuykMzD1GdZ1X0A/eWgrPkjWlCYbqYF+iLaKZ+Yt0Slx1051QXbBTENYtr6fRNtx8zh2vI5rLumIPyXRDyrdCLSfYiThMLRb68/7ZsDifqKUWhGujQhxDvG/cxwizGk9315g4G7lTlEO1g6U4kgf5WPrYnTMxnZfjCV3KsMxBdH+VzYTsyLJSt9x8rzpAH5uNMUrzSHI5SySFJpPSlykOGcZLDltyXKmgYLjIgMnKyeKcvKNpL5xSWKq5JwI8UgLLfgtsFIFq1KF/vNrHRDnCfGwxQSLLQchK/SEaX4fcR5e3kyrm0djbMsQipbf313y1CCdfXV7Bj13v0NN5r9gNlL3JC/h1cY5787pv1wnnuFIk470NbiSTa0J1kfMMFJxFA71XXCefg5PxdRG1aV7qGXduPvm+kK9+QZUA7ZfmHTh7ZNd4fLSGq8i9U036csMfgVOVU2QvHYxwYP9wAMT1Fe7IaCol+Ty64jcp5TowrvIGKd3Xca7XWhx0uNDBlQif8F0WJIor3qQOo8n/HFoowfQzqohJd4yRCZWYWXwBH4ZMEVMbAZKvcsxGtYI9fUULPKHN3Xx45DwyldF3tx9DNDPNZQZaMfjjpykxK0xidW9fsTbeqqEWgxHdBCZRyUpl3BQk+mJ6x6lUJ3rxrxQTQYz44la3KtPDsrFUTPzHyysDxvvjI6Xj5+xudnBX23t3ZGf0qlf5Kowx1PhoVAHFbsX2YH5kAbkoi+4jTmb5Q1jMqofFZwmWB+zeW1mbgYHO4fLNOtfXsADwIOnFl4AAAAASUVORK5CYII=";

const image = css`
  height: 32px;
  padding: 5px;
  width: auto;
  margin: 0 auto;
  //margin: 0;
  //opacity: 0.7;
  //position: absolute;
  //top: 0px;
  //left: 0px;
  transition: opacity 0.5s ease 0.25s;
  //width: 100%;
  //height: 100%;
  //object-fit: cover;
  //object-position: center center;
  opacity: .6;
`
const Wrapper = styled("footer")`
  margin-bottom: .5rem;
  p {
    text-align: center;
    font-size: .75em;
  }
`
const List = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  padding-left: 0;
`
const Item = styled("div")`
  display: inline-block;
`


const navContainer = css`
  width:100%;
`

const Footer = () => (
  <Wrapper>  

    <div className={navContainer}>
      <Nav />
    </div>

    <div style={{ padding: "5px 10px", backgroundColor: "#efefef" }}>
      <p style={{marginBottom: 0, borderBottom: "1px solid #e2e2e2", paddingBottom: "5px"}}>built using</p>
      <List>
          <a 
            title="Gatsby"
            href="https://gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={"data:image/svg+xml;" + gatsbyImageBase64}
              className={image}
              alt="Gatsby"
            />
          </a>
          <a 
            title="Contentful"
            href="https://contentful.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
              className={image}
              alt="Powered by Contentful"
            />
          </a>
          <a 
            title="ReactJs"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={ReactIcon} 
              className={image} 
              alt="React"
            />
          </a>
          <a 
            title="EmotionJs"
            href="https://emotion.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={EmotionIcon} 
              className={image} 
              alt="Emotion" />
          </a>
      </List>

    </div>

    <p style={{margin: "5px 0"}}>jeffsaenz.me</p>
    
  </Wrapper>
)

export default Footer