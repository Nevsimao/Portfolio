import React from 'react'
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

import { Summary } from '../../../styles/Styles'

const HomeComp = () => {
    return (
        <Summary>
                <h3 style={{padding: '18% 1em'}}>
                    <Typewriter
                        string="Hi! I'm Simao, a Software Engineer who enjoys writing clean code while turning complex problems into simple solutions. Look around to learn more!"
                        delay={50}
                        cursor='_'
                        cursorClassName
                        stopBlinkinOnComplete
                    />
                </h3>
        </Summary>
    )
}

export default HomeComp
