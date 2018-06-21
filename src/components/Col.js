import React from 'react'
import styled, {css} from "react-emotion";

const ColBase = css`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const Col = styled('div')`
  ${ColBase};
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  max-width: 100%;
`
export default Col