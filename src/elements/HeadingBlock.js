import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import {mqs, base} from '../utilities/styles'
import {H1, SubHeading as StyledSubHeading} from './'

const StlyedHeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({left}) => left && `
    align-items: flex-start
  `}

  & > * {
    text-align: center;
  }

  ${mqs({
    property: 'margin-bottom',
    valueBase: base.spacings.sectionS / 2 + 'px',
    valueM: base.spacings.sectionM / 2 + 'px',
    valueL: base.spacings.sectionL / 2 + 'px'
  })};

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
`

const SubHeading = styled(StyledSubHeading)`
  margin-bottom: 10px;
`

export const HeadingBlock = ({children, left, heading, subHeading, className}) => {
  if (heading || subHeading) {
    return (
      <StlyedHeadingBlock id='HeadingBlock' left={left} className={className}>
        {subHeading && (
          <SubHeading>
            {subHeading}
          </SubHeading>
        )}
        {heading && (
          <H1 as='h2'>
            {heading}
          </H1>
        )}
      </StlyedHeadingBlock>
    )
  } else {
    return (
      <StlyedHeadingBlock id='HeadingBlock' left={left} className={className}>
        {children}
      </StlyedHeadingBlock>
    )
  }
}

export const HeadingBlockFragment = graphql`
  fragment HeadingBlockFragment on SanityHeadingBlock {
    _key
    _type
    heading
    subHeading
  }
`
