import { createContext, ReactNode, useState } from "react";
import * as Google from 'expo-auth-session/providers/google';

import * as AuthSession from 'expo-auth-session';

import * as WebBrowser from 'expo-web-browser';


WebBrowser.maybeCompleteAuthSession();




interface UserProps{
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user : UserProps;
    isUserLoading: boolean,
    signIn: () => Promise<void>

}

interface AuthProviderProps {
    children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children } : AuthProviderProps){
    const [user, setUser] = useState<UserProps>({} as UserProps);

    const [isUserLoading, setIsLoading] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '20876555430-crkvu8ghddrk560fv5silll5c2e8gsq5.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({useProxy:true}),
        scopes: ['profile', 'email']
    })


async function signIn() {
    try {
        setIsLoading(true)
        await promptAsync();
        
    } catch (error) {
        throw error;
        
    } finally {
        setIsLoading(false)
    }
    
}

    return(
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}