import React, { useState, useCallback, FormEvent, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { uuid } from 'uuidv4';
import { hash } from 'bcryptjs';

import api from '../../service/api';

import { 
    Container, 
    Content, 
    AnimationContainer, 
    Background,
    TitlePage,
    PassInfo,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import AuthContext from '../../contexts';
interface UserProps {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
}

const Cadastro: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userConfirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [agree, setAgree] = useState(false);

    const { signed } = useContext(AuthContext);
    const hitorry = useHistory();

    useEffect(() => {
        console.log(signed);
    }, [signed])

    const handleSubmid = useCallback(async (e: FormEvent) => {
        e.preventDefault();

        const findEmail = await api.get(`users?email=${userEmail}`);
        console.log(findEmail.data);
        
        if(findEmail.data.length > 0) {
            alert('Email already in use')
            return;
        }

        if(userPassword.length < 6) {
            alert('Por favor informe uma senha com no minimo 6 caracteres.')
            return;
        }

        const hashPassoword = await hash(userPassword, 8);

        if(userPassword === userConfirmPassword)  {
            const user  = await api.post('users', {
                id: uuid(),
                name: userName,
                surname: userSurname,
                email: userEmail,
                password: hashPassoword,
            })

            if(user.status === 201) {
                hitorry.push('/')
            }
        }else{
            alert('A senha está incorreta');
        }

    }, [hitorry, userConfirmPassword, userEmail, userName, userPassword, userSurname])

    const handleAgree = useCallback(() => {
        setAgree(!agree);
    }, [agree])

    return(
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    <form action="" onSubmit={handleSubmid}>
                        <TitlePage>Complete os dados abaixo para podermos criar sua conta</TitlePage>

                        <Input 
                            label='Nome'
                            name="name" 
                            type="text"
                            value={userName}
                            onChange={(e) => {setUserName(e.target.value)}}
                        />

                        <Input 
                            label='Sobrenome'
                            name="surname" 
                            type="text"
                            value={userSurname}
                            onChange={(e) => {setUserSurname(e.target.value)}}
                        />

                        <Input 
                            label='Email'
                            name="email" 
                            type="email"
                            value={userEmail}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />

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
                            <Link to="/">Já possuo cadastro</Link>
                        </PassInfo>
                       
                        <Button disabled={disabled} type="submit">Entrar</Button>

                    </form>
                </AnimationContainer>
            </Content>
        </Container>
    )
}

export default Cadastro;