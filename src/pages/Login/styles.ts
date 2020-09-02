import styled, { keyframes } from 'styled-components';

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
	max-width: 50%;

	@media(max-width: 800px) {
		width: 100%;
		max-width: 100%;
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
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
export const Background = styled.div`
`