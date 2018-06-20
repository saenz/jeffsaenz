import React from 'react'
import PropTypes from 'prop-types';
import styled, {cx, css} from 'react-emotion'

const Li = styled('li')`
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 400;
  
  &:hover::before {
    text-decoration: none;
  }
`

const activeClass = css`
  color: #6c757d;
`

const BreadCrumbItem = (props) => {
  const {
    active,
    children,
    className,
    ...attributes
  } = props

  const classes = cx(
    {[activeClass] : active},
    className
  )

  return (
    <Li {...attributes} className={classes} aria-current={active ? 'page' : undefined}>{children}</Li>
  )
}

BreadCrumbItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

export default BreadCrumbItem