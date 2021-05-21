import React from 'react'

import {
    Nav,
    StyledLink,
    StyledNavLink
} from '../../../styles/Styles'

const NavComp = () => {
    return (
        <Nav>
            <StyledLink>
                <StyledNavLink to='/'>
                    Home
                </StyledNavLink>
            </StyledLink>
            <StyledLink>
                <StyledNavLink to='/skills' activeStyle={{ background: 'rgb(32, 32, 32)' }}>
                    About
                </StyledNavLink>
            </StyledLink>
            <StyledLink>
                <StyledNavLink to='/projects' activeStyle={{ background: 'rgb(32, 32, 32)' }}>
                    Projects
                </StyledNavLink>
            </StyledLink>
        </Nav>
    )
}

export default NavComp
