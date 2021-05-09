import React from 'react'
// import { NavLink } from 'react-router-dom'

import {
    Nav,
    StyledLink,
    StyledNavLink
} from '../../../styles/Styles'

const NavComp = () => {
    return (
        <Nav>
            <StyledLink><StyledNavLink to='/'>Home</StyledNavLink></StyledLink>
            <StyledLink><StyledNavLink to='/skills'>Skills</StyledNavLink></StyledLink>
            <StyledLink><StyledNavLink to='/projects'>Projects</StyledNavLink></StyledLink>
        </Nav>
    )
}

export default NavComp
