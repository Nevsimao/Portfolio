import React from 'react'
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

import {
    Summary
} from '../../../styles/Styles'

const HomeComp = () => {
    return (
        <Summary>
            <Typewriter
                string="I'm a Software Engineer who enjoys writing clean code while turning complex problems into simple solutions!"
                delay={50}
                cursor='_'
                cursorClassName
                stopBlinkinOnComplete
            />
        </Summary>
    )
}

export default HomeComp
