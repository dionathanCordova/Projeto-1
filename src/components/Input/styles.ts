import styled from 'styled-components';

export const InputBlock = styled.div`
    position: relative;

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
        background: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 0 1.6rem;
        color: #6a6188;

        ::placeholder{
            color: #C1BCCC;
        }
    }

    :focus-within::after{
        width: calc(100% - 3.2rem);
        background: var(--color-primary-light);
        content: '';
        height: 2px;
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }
`