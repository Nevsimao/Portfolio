import React from 'react'
import { Link } from 'react-router-dom'

import {
    Nav
} from '../../../styles/Styles'

const NavComp = () => {
    return (
        <Nav>
            <Link to='/'>Home</Link>
            <Link to='/'>Skills</Link>
            <Link to='/'>Projects</Link>
        </Nav>
    )
}

export default NavComp
