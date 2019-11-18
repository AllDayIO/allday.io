import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {rgba, invert} from 'polished'

import {Wrapper, Container, H1, SubHeading, HeadingBlock, Button} from '../elements/'
import {darkBase, base, media, mqs} from '../utilities/styles'
import BlockContent from './BlockContent'

const FromWrapper = styled.section`
  background-color: ${props => props.theme.colors.background};
  border: solid 1px ${props => rgba(props.theme.grid.color, props.theme.grid.opacity)};
  border-bottom: none;
  /* padding: ${base.spacings.base}px; */
  display: grid;
  grid-template-columns: 1fr;

  ${mqs({
      property: 'padding',
      valueBase: `${base.spacings.sectionS / 2}px`,
      valueM: `${base.spacings.sectionS / 2}px`,
      valueL: `${base.spacings.sectionM / 2}px`,
      valueXL: `${base.spacings.sectionL / 2}px`
    })};

    ${mqs({
      property: 'grid-gap',
      valueBase: `${base.spacings.sectionS / 2}px`,
      valueM: `${base.spacings.sectionS / 2}px`,
      valueL: `${base.spacings.sectionM / 2}px`,
      valueXL: `${base.spacings.sectionL / 2}px`
    })};

  ${media.large`

    ${props => props.twoColumn ? (`
      grid-template-columns: 1fr 1fr;
    `) : (`
      // width:50%;
    `)
    }
  `}
`

const Form = styled.form`
  button {
    width: 50%; 
  }

  .formText {
    border-bottom: solid 1px ${props => rgba(props.theme.grid.color, props.theme.grid.opacity)};
    padding-bottom: 20px;
    margin-bottom: 20px;
    font-weight: ${base.fontWeights.bold};
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;

  /* label {
    transform: translateY(50px);
  }

  &.focused {
    label {
      transform: translateY(0);
      font-size: 14px;
    }
  } */
`

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${props => rgba(props.theme.grid.color, props.theme.grid.opacity * 2)};
  /* background-color: ${props => invert(rgba(props.theme.colors.background, 0.025))}; */
  border-radius: 1px;
  padding: 15px;
  margin: 15px 0 30px 1px;
`

const SideBar = styled.div`
  p:first-of-type {
    margin-top: 0;
  }
`

const ContactForm = (props) => {
  const {data, rawData} = props
  return (
    <Wrapper hasGrid theme={base} noSpace>
      <Container main>
        <FromWrapper twoColumn={rawData && rawData.sidebarText && rawData.sidebarText}>
          <Form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' action='/'>
            {data && data.text && (
              <div className='formText'>
                {data.text}
              </div>
            )}
            <input type='hidden' name='bot-field' />
            <input type='hidden' name='form-name' value='contact' />
            <Field className='field half first'>
              <label htmlFor='name'>Name</label>
              <Input type='text' name='name' id='name' />
            </Field>
            <Field className='field half'>
              <label htmlFor='email'>Email</label>
              <Input type='text' name='email' id='email' />
            </Field>
            <Field className='field'>
              <label htmlFor='message'>Message</label>
              <Input as='textarea' name='message' id='message' rows='6' />
            </Field>

            <Button as='button' type='submit'>
            Send Message
            </Button>

          </Form>
          {rawData && rawData.sidebarText && (
            <SideBar>
              <BlockContent blocks={rawData.sidebarText || []} />
            </SideBar>
          )}
        </FromWrapper>
      </Container>
    </Wrapper>
  )
}

export default ContactForm

export const query = graphql`
  fragment FormContactFragment on SanityFormContact {
    _key
    _type
    redirectLocation {
      current
    }
    text
  }
`
