import React from 'react'

import SelectionsComp from './SectionsComp'
import NavComp from './NavComp'

import {
    Main
} from '../../../styles/Styles'

const MainComp = () => {
    return (
        <Main>
            <NavComp />
            <SelectionsComp />
        </Main>
    )
}

export default MainComp
