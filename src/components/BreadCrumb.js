import React from 'react'
import PropTypes from 'prop-types'
import styled, {cx} from 'react-emotion'

const Nav = styled('nav')`
  margin-bottom:0;
`
const BreadCrumb = (props) => {
  
  const {
    separator,
    children,
    className,
    ...attributes
  } = props;

  const classes = cx(className)

  const Ol = styled('ol')`
    display: flex;
    padding: .75rem 0 0 0;
    margin-bottom: 0;
    margin-left: 0;
    list-style: none;
    background-color: white;

    li + li {
      padding-left: 0.5rem;
      &::before {
        display: inline-block;
        padding-right: 0.5rem;
        color: #6c757d;
        content: "${separator}";
      } 
    }
  `

  return (
    <Nav {...attributes} className={classes} aria-label="breadcrumb">
      <Ol>
        {children}
      </Ol>
    </Nav>
  )
}

BreadCrumb.propTypes = {
  children: PropTypes.node,
  separator: PropTypes.string,
  className: PropTypes.string
}

BreadCrumb.defaultProps = {
  separator: '/'
}
export default BreadCrumb