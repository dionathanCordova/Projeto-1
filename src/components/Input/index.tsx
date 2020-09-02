import React, { InputHTMLAttributes } from 'react';

import {
    InputBlock
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    type: string;
}

const Input: React.FC<InputProps> = ({label, type, name, ...rest}) => {
    return (
        <InputBlock className="input-block">
            <label htmlFor={name}>{label}</label><br></br>
            <input type={type} id={name} { ...rest} />
        </InputBlock>
    )
}

export default Input;