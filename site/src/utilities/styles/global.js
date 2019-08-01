import {createGlobalStyle} from 'styled-components'
import styledNormalize from 'styled-normalize'

import {base, darkPulp, lightWatermelly, colorsList} from './theme'
import {transition} from './transition'
export const GlobalStyle = createGlobalStyle`


  ${styledNormalize}

  html {
    /* background: red; */
    box-sizing: border-box;
    font-size: 10px;
    color: ${props => props.theme.colors.text};
    font-family: ${base.fonts.body};
  }

  /* * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } */

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: ${base.lineHeights.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.accent};
    ${transition({})};
  }


  button {
    ${transition({})};
  }

  table {
    width: 90%;
    border-spacing: 0;
  }
  table tr td {
    text-align: center;
    padding: 0;
  }
  table.striped tr:nth-child(even) {background: #f0f0f0}

  .auth0-lock.auth0-lock.auth0-lock-with-tabs .auth0-lock-overlay { background: none; }
  .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-overlay { background: none; }
  .auth0-lock.auth0-lock .auth0-lock-overlay { background: none; }
  .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-widget {box-shadow: 0 0 40px 4px #969696 !important}

  ::-moz-selection {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accentHover};
  }
  ::selection {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accentHover};
  }

  {${Object.keys(colorsList).map(function (color) {
    return '.color-' + color + ' {fill:' + colorsList[color] + ';}'
  }).join('')}

  svg .pulp {
    fill: ${base.colors.pulp};
  }
`
