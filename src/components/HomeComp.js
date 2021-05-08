import React from 'react'

import LinksComp from './sections/LinksComp'
import TitleComp from './sections/TitleComp'
import MainComp from './sections/Main/MainComp'

import {
    Home
} from '../styles/Styles'

const HomeComp = () => {
    return (
        <Home>
            <LinksComp />
            <TitleComp />
            <MainComp />
        </Home>
    )
}

export default HomeComp
