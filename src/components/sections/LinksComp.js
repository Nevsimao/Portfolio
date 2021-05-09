import React from 'react'

import {
    Links,
    StyledLink,
    GitIcon,
    LinkedInIcon
} from '../../styles/Styles'

const LinksComp = () => {
    return (
        <Links>
            <StyledLink to='/'>
                <GitIcon size="28" />
            </StyledLink>
            <StyledLink to='/'>
                <LinkedInIcon size="28" />
            </StyledLink>
        </Links>
    )
}

export default LinksComp
