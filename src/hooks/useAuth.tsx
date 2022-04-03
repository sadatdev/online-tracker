import { login } from 'api/auth';
import { useAuthContext } from 'contexts/AuthContext';
import { useMutation } from 'react-query';
import { TOKEN_KEY } from 'utils/constants';
import { removeState, saveState } from 'utils/storage';

export const useAuth = () => {
    const { authDispatch } = useAuthContext();

    const loginUser = useMutation(login, {
        onSuccess: (response) => {
            if (response.status === 200 && response.data) {
                saveState(TOKEN_KEY, response.data);
                authDispatch({ type: 'login', payload: { token: response.data } });
            }
        },
    });

    const logoutUser = () => {
        removeState(TOKEN_KEY);
        authDispatch({ type: 'logout' });
    };

    return { loginUser, logoutUser };
};
