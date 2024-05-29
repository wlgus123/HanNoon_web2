import React from "react";
import styled from "styled-components"
import { GlobalStyle } from "../Style/Styles";
import { ReactComponent as Logo } from '../svg/Logo.svg'
import { ReactComponent as Menu } from '../svg/Menu.svg'

function Navbar() {
    return (
        <NavbarContainer>
            <GlobalStyle />
            <NavbarLogo>
                <a href="/">  {/* navbar left */}
                    <Logo />
                </a>
            </NavbarLogo>
            <NavbarMenu>  {/* navbar right */}
                <Menu />
            </NavbarMenu>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    display: flex;
    padding: 1vmin;
    box-shadow: 0px 1px 10px 0px #CCCCCC;
`

const NavbarLogo = styled.div`
    text-align: left;

    @media screen and (max-width: 800px) {
        * {
            width: 46vmax;
        }
    }

    @media screen and (min-width: 800px) and (max-width: 1020px) {
        * {
            width: 50vmin;
        }
    }

    @media screen and (min-width: 1020px) {
        * {
            width: 50vmin;
        }
    }
`

const NavbarMenu = styled.div`
    margin-left: auto;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        * {
            width: 8vmin;
        }
    }

    @media screen and (min-width: 800px) and (max-width: 1020px) {
        * {
            width: 6.5vmin;
        }
    }

    @media screen and (min-width: 1020px) {
        * {
            width: 6.5vmin;
        }
    }
`

export default Navbar;