import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #FFF;

    @media(max-width: 800px) {
		flex-direction: column;
		position: relative;
		justify-content: center;
		text-align: center;
	}
`

export const Header = styled.div`
    width: 100%;
    height: 6rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 10rem;
    padding-right: 10rem;
    background: var(--color-background);
    border-bottom: 1px solid #E6E6F0;

    img{
        width: 15rem;
    }

    button {
        background: #FFF;
        width: 4rem;
        height: 4rem;
        border-radius: 0.8rem;
        align-items: center;
        
        &:hover{
            background: ${shade(0.1, '#FFF')};
        }

        img{
            margin-top: 4px;
            width: 3rem;
        }
    }
`

export const Content = styled.div`
    display: flex;
	
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

	@media(max-width: 800px) {
		width: 100%;
		max-width: 100%;
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
`