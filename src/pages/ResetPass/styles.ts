import styled, { keyframes } from 'styled-components';

import TesteBg from '../../assets/images/testePageBg.png';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: stretch;

    @media(max-width: 800px) {
		flex-direction: column;
		position: relative;
		justify-content: center;
		text-align: center;
	}
`
export const Content = styled.div`
    display: flex;
	flex-direction: row;
	align-items: center;
	
	justify-content: center;
	width: 100%;
	max-width: 40%;

	background: #fff;

	@media(max-width: 800px) {
		width: 100%;
		max-width: 100%;
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
`

export const TitlePage = styled.h3`
    margin-bottom: 3rem;
`

const appearFromRight = keyframes`
	from{
		opacity:0;
		transform: translateX(50px);
	}
	to{
		opacity: 1;
		transform: translateX(0);
	}
`

export const AnimationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	animation: ${appearFromRight} 1s;
	
	form{
		width: 340px;
		
		h1{
			margin-bottom: 24px;
			color: #32264D
		}
	}
`
export const PassInfo = styled.div`
	display: flex;
	font-size: 1.2rem;
	color: var(--color-text-complement);
	padding-top: 2rem;

	justify-content: space-between;

	a {
		padding-top: 0.8rem;
		font-size: 1.2rem;
		color: var(--color-text-complement);
		text-decoration: none;
		transition: -webkit-filter .2s;
		transition: filter .2s;
		transition: filter .2s,-webkit-filter .2s;
	}
`

export const Background = styled.div`
	flex: 1;
	background: url(${TesteBg}) no-repeat center;

`
