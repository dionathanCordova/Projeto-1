import React, { useState, FormEvent, useCallback, useContext } from 'react';
import { useHistory, Link} from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import AuthContext from '../../contexts';

import { 
    Container, 
    Content, 
    AnimationContainer, 
    Background,
    TitlePage,
    PassInfo,
    Error
} from './styles';

const Login: React.FC = () => {
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    const { signIn } = useContext(AuthContext)

    const handleSubmid = useCallback(async (e: FormEvent) => {
        e.preventDefault();
        const login = await signIn(userEmail, userPassword);

       console.log(login);  
       if(login.status) {
           history.push('/landpage');
       }else{
           setError('Email ou senha incorretos.')
       }

    }, [history, signIn, userEmail, userPassword])

    return(
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    
                    <form action="" onSubmit={handleSubmid}>
                        <TitlePage>Fazer login</TitlePage>

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

                        <Error>{error}</Error>
                        <PassInfo>
                            <Link to="creat-account">Criar uma conta</Link>
                            <Link to="forgot-password">Esqueci minha senha</Link>
                        </PassInfo>
                        <Button disabled={disabled} type="submit">Entrar</Button>

                    </form>
                </AnimationContainer>
            </Content>
        </Container>
    )
}

export default Login;