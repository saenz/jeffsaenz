import React from 'react'
import styled from 'react-emotion'

const Title = styled.h1`
  font-size: ${props => (props.small ? '2em' : '3em')};
  font-weight: 300;
  margin: ${props => (props.small ? '1rem 0 1rem 0' : '0 0 3rem 0')};
  //line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const SectionTitle = props => {
  return <Title small={props.small}>{props.children}</Title>
}

export default SectionTitle
