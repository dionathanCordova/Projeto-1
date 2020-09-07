import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Land from '../pages/Land';
import ForgotPass from '../pages/ForgotPass';
import ResetPass from '../pages/ResetPass';

import { AuthProvider } from '../contexts';

const Routes: React.FC = () => (
    <BrowserRouter>
        <AuthProvider>
            <Route path="/" exact component={Login} />
            <Route path="/creat-account" exact component={Cadastro} />
            <Route path="/landpage" component={Land} />
            <Route path="/forgot-password" component={ForgotPass} />
            <Route path="/reset-password/:userEmail" component={ResetPass} />
        </AuthProvider>
    </BrowserRouter>
)

export default Routes;