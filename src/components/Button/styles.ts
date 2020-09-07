import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
    disabled?: boolean;
    loading?: boolean;
}

export const ContainerButton = styled.button<ButtonProps>`
    margin-top: 2rem;
    width: 100%;
    border: 0;
    border-radius: 0.6rem;
    margin: 5rem 0 5rem;
    
    padding: 1.2rem;
    color: ${(props: ButtonProps) => props.disabled ? '#000' : '#FFF'};
    background: ${(props: ButtonProps) => props.disabled ? '#ccc' : '#3D8FED'};

    transiction: background-color 0.2s;

    :hover{
        background:  ${(props: ButtonProps) => props.disabled ? shade(0.3, '#ccc') : shade(0.3, '#3D8FED')};
    }

`