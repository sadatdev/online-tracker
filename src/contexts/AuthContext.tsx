import React, { createContext } from 'react';

/* Types */
type State = {
    isLoading: boolean;
    isAuthenticated: boolean;
    token: string | null;
};

type Action = { type: 'login'; payload: { token: string } } | { type: 'logout' } | { type: 'init' };
type Dispatch = (action: Action) => void;
type AuthProviderProps = { children: React.ReactNode };

const AuthContext = createContext<{ authState: State; authDispatch: Dispatch } | undefined>(
    undefined
);

const defaultState = {
    isLoading: true,
    isAuthenticated: false,
    token: null,
};

function authReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'login': {
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                token: action.payload.token,
            };
        }
        case 'init': {
            return {
                ...state,
                isLoading: false,
            };
        }
        case 'logout': {
            return defaultState;
        }
        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [authState, authDispatch] = React.useReducer(authReducer, defaultState);
    const value = { authState, authDispatch };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuthContext() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within a AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuthContext };
