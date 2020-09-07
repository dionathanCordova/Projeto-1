import React, { useState, FormEvent, useCallback } from 'react';
import { useHistory, Link} from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';

import { 
    Container, 
    Content, 
    AnimationContainer, 
    Background,
    TitlePage,
    PassInfo
} from './styles';

import api from '../../service/api';

const Forgot: React.FC = () => {
    const [userEmail, setEmail] = useState('');
    const [disabled, setDisabled] = useState(false);

    const history = useHistory();

    const handleSubmid = useCallback(async (e: FormEvent) => {
        e.preventDefault();

       if(userEmail !== '') {

            const user = await api.get(`users?email=${userEmail}`);
            if(user.data.length === 0) {
                alert('Não encontramos nenhum usuario com este email');
                return;
            }else{
                const userId = user.data[0].id;

                axios.post('https://nodejs-apiemail.herokuapp.com/forgot_teste', {
                    email: userEmail,
                    id: userId
                }).then(response => {
                    alert('Verifique sua caisa de email');
                    history.push('/')
                }).catch(err => {
                    alert(err.message)
                })
            }
       }

    }, [history, userEmail])

    return(
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    
                    <form action="" onSubmit={handleSubmid}>
                        <TitlePage>Resetar senha</TitlePage>

                        <Input 
                            label='Email'
                            name="email" 
                            type="email"
                            value={userEmail}
                            onChange={(e) => {setEmail(e.target.value)}}
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

export default Forgot;