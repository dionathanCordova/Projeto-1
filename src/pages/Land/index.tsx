import React, { useCallback, useContext, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import TesteBg from '../../assets/images/testePageBg.png';
import powerof from '../../assets/images/Sair.svg';
import AuthContect from '../../contexts';

import { 
    Container,
    Header,
    Content, 
    // AnimationContainer, 
    // Background,
    // TitlePage,
    // Error
} from './styles';


const Land: React.FC = () => {

    const {signOut, signed} = useContext(AuthContect);
    const history = useHistory();

    useEffect(() => {
        console.log(signed);
        if(!signed) {
            history.push('/');
        }
    }, [history, signed])

    const getOut = useCallback(() => {
        signOut()
    }, [signOut])
    
    return(
        <Container>
            <Header>
                <img src={TesteBg} alt=""/>
                <button onClick={getOut} className="signout">
                    <img src={powerof} alt="signout"/>
                </button>
            </Header>

            <Content>
                <h1>Land</h1>
            </Content>
        </Container>
    )
}

export default Land;