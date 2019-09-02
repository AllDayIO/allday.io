import React from 'react'
import styled from 'styled-components'

import {lightWatermelly, darkWatermelly, lightPulp, darkPulp, base, media} from '../utilities/styles/'
import {Button, H1, SubHeading, HeadingBlock, ButtonBlock, Wrapper, Container} from '../elements/'
import ServiceBox from './ServiceBox'

const Services = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${base.spacings.base}px;
  padding: 0;

  ${media.medium`
    grid-template-columns: 1fr 1fr;
  `}
 
  ${media.xLarge`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

const ServicesBlock = ({data}) => {
  const {services, headingBlock, button} = data

  return (
    <Wrapper hasGrid theme={base} addSpace>
      <HeadingBlock>
        <SubHeading>
          {headingBlock.subHeading && headingBlock.subHeading}
        </SubHeading>
        <H1 as='h2'>
          {headingBlock.heading && headingBlock.heading}
        </H1>
      </HeadingBlock>
      <Container>
        <Services>
          {services.map((service, i) => {
            return (
              <ServiceBox key={service._id} iteration={i + 1} {...service} />
            )
          })}
        </Services>
      </Container>
      {button && button.text && <ButtonBlock>
        <Button {...button} />
      </ButtonBlock>}
    </Wrapper>
  )
}

export default ServicesBlock
