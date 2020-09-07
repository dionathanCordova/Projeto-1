import React, { ButtonHTMLAttributes } from 'react';

import {
    ContainerButton
} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    disabled?: boolean;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, disabled, ...rest}) => {
    return (
        <ContainerButton disabled={disabled} {...rest}>
            {children}
        </ContainerButton>
    )
}

export default Button;