import React from 'react'
import PropTypes from 'prop-types'
import { cx, css } from 'react-emotion'
import { media } from '../utils/media'

const Base = css`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
`

const FixedWidth = css`
    @media ${media.sm} {
	    max-width: 540px;
    }

	@media ${media.md} {
	    max-width: 720px;
	}

	@media ${media.lg} {
	    max-width: 960px;
	}

	@media ${media.xl} {
	    max-width: 1140px;
	}
`

const Container = ({ children, fluid }) => {
  	return (
  		<div 
  			className={cx(
  				{ [ Base ] : true },
  				{ [ FixedWidth ]: !fluid }	
  			)}
  		>{children}</div>
  	)
}

Container.propTypes = {
    children: PropTypes.element.isRequired,
    fluid: PropTypes.bool
}

export default Container
