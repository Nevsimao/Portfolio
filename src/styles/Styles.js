import styled, { keyframes } from "styled-components"
import { tada, slideInDown, fadeIn } from 'react-animations'
import { Link, NavLink } from 'react-router-dom'
import {Github} from '@styled-icons/boxicons-logos'
import {LinkedinSquare} from '@styled-icons/boxicons-logos'

export const Home = styled.div`
    width: 100vw;
    color: white;
    text-align: center;
    display: grid;
    grid-template-rows: auto auto 60vh;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: 
    '. title .'
    '. links .'
    '. main .'
`

export const slideInDownAni = keyframes`
    ${ slideInDown }
`

export const fadeInAni = keyframes`
    ${ fadeIn }
`

export const tadaAni = keyframes`
    ${ tada }
`

export const Title = styled.div`
    grid-area: title;
    animation: 2s ${slideInDownAni};
`

export const TitleName = styled.h1`
    padding: 1.5em 0em 0em 0em;
    margin: 0;
`

export const TitleSub = styled.h5`
    padding: 0em 0em 1em 0em;
    margin: 0;
`

export const Links = styled.div`
    grid-area: links;
    display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 auto 0 auto;
	padding: 0.3em 0em 0.1em 0em;
	text-align: center;
    animation: 2.5s ${tadaAni};
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export const StyledNavLink = styled(NavLink)`
	margin: 0 auto 0 1rem;
    padding: 0.25em 0.18em;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	border: 0.09em solid white;
    &.bottom {
		justify-content: center;
	}
    &:active{
        background: rgb(32, 32, 32);
    }
    &:hover {
        background: rgb(32, 32, 32);
        transform: scale(1.08);
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export const Main = styled.div`
    grid-area: main;
    background: rgb(64, 64, 64);
    margin-top: 1.5em;
    border-radius: 0.8em;
    display: grid;
    animation: 1s ${fadeInAni};
    grid-template-areas: 
    'nav'
    'sections'
`

export const Nav = styled.nav`
    grid-area: nav;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 97.5%;
	flex-wrap: wrap;
	flex-direction: row;
	margin: 0 auto 0 auto;
	padding: 0.8em 0em 0em 0.6em;
	text-align: center;
`

export const Sections = styled.div`
    grid-area: sections;
    height: 50vh;
`

export const Summary = styled.div`
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    border-radius: 0em 0em 0.8em 0.8em;
`

export const Skills = styled.div`
    display: grid;
    grid-template-rows: 25vh auto;
    grid-template-areas: 
    'skills'
    'education'
    ;
`

export const skillSec = styled.div`
    grid-area: skills;
`

export const educationSec = styled.div`
    grid-area: education;
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

export const GitIcon = styled(Github)`
`

export const LinkedInIcon = styled(LinkedinSquare)`
`
