import styled from "styled-components"

export const Home = styled.div`
    width: 100%;
    color: white;
    text-align: center;
    display: grid;
    grid-template-areas: 
    'title'
    'links'
    'main'
`

export const Title = styled.div`
    grid-area: title;
`

export const TitleName = styled.h1`
    padding: 35px 35px 0px 35px;
    margin: 0;
`

export const TitleSub = styled.h5`
    padding: 0px 35px 35px 35px;
    margin: 0;
`

export const Links = styled.div`
    grid-area: links;
`

export const Main = styled.div`
    grid-area: main;
    background: rgb(64, 64, 64);
    display: grid;
    grid-template-areas: 
    'nav'
    'sections'
`

export const Nav = styled.nav`
    grid-area: nav;
`

export const Sections = styled.div`
    grid-area: sections;
`

export const Summary = styled.div`

`
export const Skills = styled.div`

`

export const Project = styled.div`

`

export const ProjectName = styled.div`

`

export const ProjectLink = styled.div`

`

export const ProjectLang = styled.div`

`

export const ProjectDescription = styled.div`

`
