import styled from "styled-components"

export const Home = styled.section`
    width: 100vw;
    height: 100vh;
    color: white;
    text-align: center;
    display: grid;
    grid-template-areas: 
    'title'
    'links'
    'main'
`

export const Title = styled.section`
    grid-area: title;
`

export const Links = styled.section`
    grid-area: links;
`

export const Main = styled.section`
    grid-area: main;
    display: grid;
    grid-template-areas: 
    'nav'
    'sections'
`

export const Nav = styled.nav`
    grid-area: nav;
`

export const Sections = styled.section`
    grid-area: sections;
`
