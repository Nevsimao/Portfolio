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
    padding: 35px 35px 0px 35px;
    margin: 0;
`

export const TitleSub = styled.h5`
    padding: 0rem 0rem 1rem 0rem;
    margin: 0;
`

export const Links = styled.div`
    grid-area: links;
    display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto 0 auto;
	padding: 3px 0px 3px 0px;
	height: 6vh;
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
    padding: 1.5px 3px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	border: 1px solid white;
    &.bottom {
		justify-content: center;
	}
    &:active{
        background: rgb(32, 32, 32);
    }
    &:hover {
        background: rgb(32, 32, 32);
        transform: scale(1.05);
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export const Main = styled.div`
    grid-area: main;
    background: rgb(64, 64, 64);
    margin-top: 1rem;
    border-radius: 10px;
    display: grid;
    animation: 1s ${fadeInAni};
    grid-template-areas: 
    'nav'
    'sections'
`

export const Nav = styled.nav`
    grid-area: nav;
    margin-top: 0.3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
	flex-wrap: wrap;
	flex-direction: row;
	margin: 0 auto 0 auto;
	padding: 9px 0px 6px 0px;
	text-align: center;
`

export const Sections = styled.div`
    grid-area: sections;
    height: 50vh;
    margin-top: 0.5rem;
    padding: 0px 0 6px 0px;
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

export const GitIcon = styled(Github)`
`

export const LinkedInIcon = styled(LinkedinSquare)`
`
