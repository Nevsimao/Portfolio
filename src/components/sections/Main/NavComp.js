import React from 'react'
import { NavLink } from 'react-router-dom'

import {
    Nav
} from '../../../styles/Styles'

const NavComp = () => {
    return (
        <Nav>
            <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/skills'>Skills</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            </ul>
        </Nav>
    )
}

export default NavComp
