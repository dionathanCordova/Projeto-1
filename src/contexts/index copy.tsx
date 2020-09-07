import React, { createContext, useState, useCallback } from "react";
import api from "../service/api";
import { compare } from "bcryptjs";

interface UserProps {
    id: string;
    name: string;
    avatar: string;
    email: string;
}

interface SignedResult {
    status: boolean;
}

interface ResponseSignInUser {
    user: UserProps;
}

interface AuthContextData {
    signed: boolean;
    user: UserProps;
    loading: boolean;
    signIn(
        email: string,
        password: string,
    ): Promise<SignedResult>;
    signOut(): void;
    updateUser(user: UserProps): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    const [data, setData] = useState<ResponseSignInUser>(() => {
        // const storegedUser = localStorage.getItem('@AuthProffy:user');

        // if(storegedUser) {
        //     return { user: JSON.parse(storegedUser)};
        // }

        return {} as ResponseSignInUser;
    })

    async function signIn(email: string, password: string): Promise<SignedResult> {

        const response = await api.get(`users?email=${email}`);

        const user = response.data;
        if (user.length > 0) {
            const passwordCompare = await compare(password, user[0].password)

            if(passwordCompare) {
                console.log(user[0].password);
            }
            
            console.log(user[0]);
            // localStorage.setItem("@AuthTeste:user", JSON.stringify(user));
            
            // setUser(user);
            // setSigned(true);
            // setData({user})

            return {status : true};
        }else{
            // setSigned(false);
            // setUser({} as UserProps);
            // setData({} as ResponseSignInUser);

            return {status: false};
        }
    }

    async function signOut() {
        // localStorage.clear();
        // localStorage.removeItem("@AuthTeste:user");

        setUser({} as UserProps);
        setSigned(false);
        setData({} as ResponseSignInUser);

        return {signed: false}
    }

    const updateUser = useCallback((user: UserProps) => {
        localStorage.setItem("@AuthTeste:user", JSON.stringify(user));

        setData({
            user,
        });

    }, [])

    return (
        <AuthContext.Provider value={{ 
            signed: !!data.user, 
            user: data.user, 
            loading, 
            signIn, 
            signOut,
            updateUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
// export function useAuth() {
//     const context = useContext(AuthContext);
//     return context;
// }