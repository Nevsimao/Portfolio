import React from 'react'
import { HashRouter } from 'react-router-dom'
import SelectionsComp from './SectionsComp'
import NavComp from './NavComp'

import {
    Main
} from '../../../styles/Styles'

const MainComp = () => {
    return (
        <HashRouter>
            <Main>
                <NavComp />
                <SelectionsComp />
            </Main>
        </HashRouter>
    )
}

export default MainComp
