import React, { useEffect, useState, FormEvent, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Input from '../../components/Input';

import { 
    Container, 
    Content, 
    AnimationContainer, 
    // Background,
    // PassInfo,
    // FooterInfo,
} from './styles';

const Login: React.FC = () => {
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    const handleSubmid = useCallback(() => {

    }, [])

    return(
        <Container>
             <Content>
                <AnimationContainer>
                    
                    <form action="" onSubmit={handleSubmid}>
                        <h1>Fazer login</h1>

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

                        {/* <PassInfo>
                            <label className="container">Lembrar-me
                                <input type="checkbox" checked={rememberMe} onChange={handleRememberMe} onClick={handleRememberMe} />
                                <span className="checkmark"></span> 
                            </label>
                            <Link to="forgot-password">Esqueci minha senha</Link>
                        </PassInfo>
                        
                        <Button disabled={disabled} type="submit">Entrar</Button> */}

                    </form>
                </AnimationContainer>
             </Content>
        </Container>
    )
}

export default Login;