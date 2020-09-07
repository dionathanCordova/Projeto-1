import React, { useState, FormEvent, useCallback, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as H from "history";
import api from '../../service/api';

import AuthContect from '../../contexts';
import { hash } from 'bcryptjs';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { 
    Container, 
    Content, 
    AnimationContainer, 
    Background,
    TitlePage,
    PassInfo
} from './styles';

type TokenParams = {
    params: {
        userEmail: string;
    };
};

interface RouteProps {
    match: TokenParams;
    location: H.Location;
    history: H.History;
    staticContext?: any;
}

const Reset: React.FC<RouteProps> = ({match}: RouteProps) => {
    const [userPassword, setPassword] = useState('');
    const [userConfirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);

    const history = useHistory();

    const handleSubmid = useCallback(async (e: FormEvent) => {
        e.preventDefault();

        const userEmail = match.params.userEmail;
        const user = await api.get(`users?email=${userEmail}`);

        if(userPassword !== "" && userPassword === userConfirmPassword) {
            if(user.data.length > 0) {
                const {id, email, name, surname} = user.data[0];

                const hashPassoword = await hash(userPassword, 8);
                const { status } = await api.put(`users/${id}`, {
                    password: hashPassoword,
                    email,
                    name,
                    surname
                });

                if(status === 200) {
                    history.push('/');
                }
            }
        }

    }, [history, match.params.userEmail, userConfirmPassword, userPassword])

    return(
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    
                    <form action="" onSubmit={handleSubmid}>
                        <TitlePage>Resetar senha</TitlePage>

                        <Input 
                            label='Senha'
                            type="password"
                            name="password" 
                            value={userPassword}
                            onChange={(e) => {setPassword(e.target.value)}}
                        />

                        <Input 
                            label='Confirme a senha'
                            type="password"
                            name="confirm-password" 
                            value={userConfirmPassword}
                            onChange={(e) => {setConfirmPassword(e.target.value)}}
                        />

                        <PassInfo>
                            <Link to="/">Voltar</Link>
                        </PassInfo>
                        
                        <Button disabled={disabled} type="submit">Resetar senha</Button>

                    </form>
                </AnimationContainer>
            </Content>
        </Container>
    )
}

export default Reset;