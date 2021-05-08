import React from 'react'
import { Link } from 'react-router-dom'

import {
    Links
} from '../../styles/Styles'

const LinksComp = () => {
    return (
        <Links>
            <Link to='/'>GitHub</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Twitter</Link>
        </Links>
    )
}

export default LinksComp
