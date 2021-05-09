import React from 'react'

import {
    Links,
    StyledLink
} from '../../styles/Styles'

const LinksComp = () => {
    return (
        <Links>
            <StyledLink to='/'>GitHub</StyledLink>
            <StyledLink to='/'>LinkedIn</StyledLink>
            <StyledLink to='/'>Twitter</StyledLink>
        </Links>
    )
}

export default LinksComp
