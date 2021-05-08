import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import {
    Nav
} from '../../../styles/Styles'

const NavComp = () => {
    return (
        <Nav>
            <Link><NavLink to='/'>Home</NavLink></Link>
            <Link><NavLink to='/skills'>Skills</NavLink></Link>
            <Link><NavLink to='/projects'>Projects</NavLink></Link>
        </Nav>
    )
}

export default NavComp
