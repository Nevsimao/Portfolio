import React from 'react'
import { Route } from 'react-router-dom'
import HomeComp from './HomeComp'
import SkillsComp from './SkillsComp'
import ProjectsComp from './ProjectsComp'

import {
    Sections
} from '../../../styles/Styles'

const SectionsComp = () => {
    return (
        <Sections>
            <Route exact path='/' component={HomeComp}/>
            <Route path='/skills' component={SkillsComp}/>
            <Route path='/projects' component={ProjectsComp}/>
        </Sections>
    )
}

export default SectionsComp
