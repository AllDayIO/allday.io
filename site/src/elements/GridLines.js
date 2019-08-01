import React from 'react'
import styled from 'styled-components'
import {rgba} from 'polished'

const lineOpacity = 0.1

const StyledGridWrap = styled.div`
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 0;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  z-index: -1;

  > div {
    height: 100%;
    border-left: ${props => props.theme.lines && rgba(props.theme.lines, lineOpacity)} solid 1px;

    &:last-of-type {
    width: calc(100% - 1px);
    border-right: ${props => props.theme.lines && rgba(props.theme.lines, lineOpacity)} solid 1px;
    }
  }
`

export const GridLines = ({backgroundColor}) => (
  <StyledGridWrap backgroundColor={backgroundColor}>
    <StyledGrid>
      <div />
      <div />
      <div />
      <div />
    </StyledGrid>
  </StyledGridWrap>
)
