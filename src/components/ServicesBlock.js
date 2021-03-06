import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import {lightWatermelly, darkWatermelly, lightPulp, darkPulp, base, media} from '../utilities/styles/'
import {Button, H1, SubHeading, HeadingBlock, ButtonBlock, Wrapper, Container} from '../elements/'
import ServiceBox from './ServiceBox'

const Services = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding-left: ${base.spacings.base}px;
  padding-right: ${base.spacings.base}px;

  ${media.medium`
    grid-gap: ${base.spacings.base}px;
    grid-template-columns: 1fr 1fr;
  `}
 
  ${media.xLarge`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`

const ServicesBlock = ({data}) => {
  const {services, headingBlock, button} = data
  const {heading, subHeading} = headingBlock || ''

  return (
    <Wrapper hasGrid theme={base} addSpace>
      {headingBlock && (heading || subHeading) && (
        <HeadingBlock {...headingBlock} />
      )}
      {/* <Container> */}
      <Services>
        {services.map((service, i) => {
          return (
            <ServiceBox key={service._id} iteration={i + 1} {...service} />
          )
        })}
      </Services>
      {/* </Container> */}
      {button && button.text && (button.text !== ' ')(
        <ButtonBlock>
          <Button {...button} />
        </ButtonBlock>
      )}
    </Wrapper>
  )
}

export default ServicesBlock

export const query = graphql`
  fragment ServicesBlockFragment on SanityServicesBlock {
    _key
    _type
    services {
      _id
      pageInfo {
        pageName
        slug {
          current
        }
      }
      sampleImage {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    headingBlock {
      heading
      subHeading
    }
    button {
      ...ButtonFragment
    }
  }
`
