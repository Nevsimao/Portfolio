import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import HomeComp from './HomeComp'
import SkillsComp from './SkillsComp'
import ProjectsComp from './ProjectsComp'

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
