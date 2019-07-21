import React, {useEffect} from 'react'
import styled, {keyframes, css} from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Link from 'gatsby-link'

// import {useGlobalState} from './Layout.js'
import LogoFile from '../../static/AllDayLogo.svg'
import {transition} from '../utilities/styles'
import SlideOutMenu from '../components/SlideOutMenu'
import {useGlobalState} from './Layout'

function colorSwap (props) {
  return keyframes`
    from {
      fill: ${props.theme.colors.white};
    }
    ${(100 / 6) * 1}% {
      fill: ${props.theme.colors.pulp};
    }
    ${(100 / 6) * 2}% {
      fill: ${props.theme.colors.white};
    }
    ${(100 / 6) * 3}% {
      fill: ${props.theme.colors.watermelly};
    }
    ${(100 / 6) * 4}% {
      fill: ${props.theme.colors.white};
    }
    ${(100 / 6) * 5}% {
      fill: ${props.theme.colors.seal};
    }
     ${(100 / 6) * 4}% {
      fill: ${props.theme.colors.white};
    }
    ${(100 / 6) * 5}% {
      fill: ${props.theme.colors.aloe};
    }
    to {
      fill: ${props.theme.colors.white};
    }
  `
}

const StyledNavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 124px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Nav = styled.nav`
  ul, li {
    list-style: none;
  }

  ul {
    display: flex;
  }

  li {
    margin: 0 10px;

    a {
      color: ${props => props.theme.colors.black};
    }
  }
`

const Logo = styled(LogoFile)`
  left: 48px;
  top: 38px;
  z-index: 20;
  position: fixed;
  /* transform: scale(${props => props.isopen === 'true' ? 1.5 : 1}); */
  /* width: ${props => props.isopen === 'true' ? '300px' : '105px'} */
  ${transition({})};

  path {
    fill: ${props => props.isopen === 'true' ? props.theme.colors.white : props.theme.colors.black};
   
    /* animation: ${props => colorSwap} 2s linear alternate infinite; */
    ${props => props.isopen === 'true'
    ? css`animation: ${props => colorSwap} 15s linear infinite;`
    : css`animation: none;`
}
  }
`

const MenuButton = styled.button`
  right: 48px;
  top: calc((${props => props.navHeight}px / 2) - 19px);
  z-index: 20;
  position: fixed;
  background: none;
  border: none;
  color: ${props => props.isOpen ? props.theme.colors.white : props.theme.colors.black};
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: ${props => props.isOpen ? props.theme.colors.pulp : props.theme.colors.watermelly};
  }
`

const NavBar = () => {
  const [isOpen, toggleMenu] = useGlobalState('isMenuOpen')
  const [navHeight] = useGlobalState('navHeight')

  useEffect(() => {
    // addNavHeightToWrapper()
  })

  const data = useStaticQuery(graphql`
    query HEADER_QUERY {
      site: allSanitySiteSettings(limit: 1, filter: {navLinks: {elemMatch: {showInMainNav: {eq: true}}}}) {
        nodes {
          logo {
            alt
            asset {
              url
            }
          }
          navLinks {
            _key
            pageName
            pageUrl {
              current
            }
            showInMainNav
          }
        }
      }
    }
  `)

  const {logo, navLinks} = data.site.nodes[0]

  return (
    <>
      <Logo src={logo.asset.url} alt={logo.alt} isopen={isOpen ? 'true' : 'false'} />
      <StyledNavBar id='nav-bar'>

        <Nav>
          <ul>
            {navLinks.map(link => {
              if (link.showInMainNav === true) {
                return (
                  <li key={link._key}>
                    <Link to={link.pageUrl.current}>{link.pageName}</Link>
                  </li>
                )
              }
            })}
          </ul>
        </Nav>
      </StyledNavBar>
      <SlideOutMenu />

      <MenuButton onClick={() => toggleMenu(!isOpen)} aria-expanded={isOpen} isOpen={isOpen} navHeight={navHeight} >{isOpen ? 'Close' : 'Menu'}</MenuButton>

    </>
  )
}

export default NavBar
