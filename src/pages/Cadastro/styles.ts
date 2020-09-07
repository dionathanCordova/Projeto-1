import styled, { keyframes } from 'styled-components';

import TesteBg from '../../assets/images/testePageBg.png';

export const Container = styled.div`
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
    justify-content: center;
    align-items:center;
	width: 100%;
    max-width: 40%;

    overflow-y: scroll;
    scrollbar-width: none; 
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    
    background: #fff;
    
	h3{
		border-bottom: 3rem;
	}


	@media(max-width: 800px) {
		width: 100%;
		max-width: 100%;
		margin-top: 4rem;
		margin-bottom: 4rem;
    }

`

export const TitlePage = styled.h3`
    margin-bottom: 3rem;
    font-weight: 700;
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
    justify-content: center;

    height: 100vh;
   
  

    padding-bottom: 10rem;
	animation: ${appearFromRight} 1s;
	
	form{
        height: 60vh;
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

	a {
		margin-left: auto;
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