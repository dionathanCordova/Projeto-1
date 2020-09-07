import styled from 'styled-components';
import { shade } from 'polished';

export const InputBlock = styled.div`
    position: relative;

    border-bottom: 1px solid #E6E6F0;

    :hover{
        border-color: ${shade(0.3, '#E6E6F0')};
    }

    + .input-block{
        margin-top: 1.4rem;
    }

    label {
        font-size: 1.4rem;
    }

    input{
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-bottom: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 0 1.6rem;
        color: #6a6188;

        ::placeholder{
            color: #C1BCCC;
        }
    }

    :focus-within::after{
        width: calc(100% - 3.2rem);
        background: #3D8FED;
        content: '';
        height: 2px;
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }

    :focus-within{
        border-color: transparent;
    }
`