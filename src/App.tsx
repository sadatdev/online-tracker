import { Spinner } from 'components';
import { useAuthContext } from 'contexts/AuthContext';
import { DeviceListPage, LoginPage } from 'pages';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TOKEN_KEY } from 'utils/constants';
import { loadState } from 'utils/storage';

const queryClient = new QueryClient();

const App = () => {
    const {
        authState: { isLoading, isAuthenticated },
        authDispatch,
    } = useAuthContext();

    useEffect(() => {
        const token = loadState(TOKEN_KEY);
        if (token)
            authDispatch({
                type: 'login',
                payload: { token },
            });
        else {
            authDispatch({ type: 'init' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <Spinner fullPage />;
    }

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {isAuthenticated ? <DeviceListPage /> : <LoginPage />}
            </QueryClientProvider>
        </>
    );
};

export default App;
