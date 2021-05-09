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
            <StyledLink to={{ pathname: 'https://github.com/Nevsimao03' }} target="_blank">
                <GitIcon size="28" />
            </StyledLink>
            <StyledLink to={{ pathname: 'https://www.linkedin.com/in/simao-neves/' }} target="_blank">
                <LinkedInIcon size="28" />
            </StyledLink>
        </Links>
    )
}

export default LinksComp
