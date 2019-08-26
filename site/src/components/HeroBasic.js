import React from 'react'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'
import BlockContent from './BlockContent'

import {Wrapper, H1, SubHeading, Container as HeroBasicContainer} from '../elements'
import {base} from '../utilities/styles'

const Text = styled.div``

const Container = styled(HeroBasicContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;

  ${SubHeading} {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    color: ${props => props.theme.colors.text && rgba(props.theme.colors.text, 0.7)};
  }
  
  ${H1} {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    font-size: 70px;
  }
  
  ${Text} {
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
    margin-top: ${base.spacings.base};

    strong {
      color: ${props => props.theme.colors.accent};
    }

    a {
      color: ${props => props.theme.colors.accent};
      text-decoration: underline;
    }
  }
`

const HeroBasic = ({data}) => {
  const {heading, subHeading, text} = data

  //   const serializers = {
  //   types: {
  //     code: props => (
  //       <pre data-language={props.node.language}>
  //         <code>{props.node.code}</code>
  //       </pre>
  //     )
  //   }
  // }

  return (
    <Wrapper hasGrid>
      <Container>
        <SubHeading>{subHeading}</SubHeading>
        <H1>{heading}</H1>
        {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque 200% increase urna. In nisi neque, aliquet vel, dapibus id, <strong>mattis vel</strong>, nisi. Sed pretium, ligula sollicitudin laoreet viverra, extremely fast load times leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti blandit nunc tortor eu nibh blandit nunc tortor.</p> */}
        {/* <BlockContent blocks={text} serializers={serializers} /> */}
        {text && <Text>
          <BlockContent blocks={text || []} />
        </Text>}
      </Container>
    </Wrapper>
  )
}

export default HeroBasic