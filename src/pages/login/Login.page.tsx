import { EmailIIcon, PasswordIcon } from 'assets';
import { Button, Input, Layout } from 'components';
import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { strings } from 'utils/strings';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { loginUser } = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        if (!email || !password) {
            setError(strings.fill_all);
        }
        loginUser.mutate(
            { email, password },
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onError: (err: any) => setError(err.response.data),
            }
        );
    };

    return (
        <Layout>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center space-y-5 bg-white p-5 md:p-8 text-gray-700 rounded shadow-xl"
            >
                <h1 className="text-5xl font-thin text-center">{strings.login}</h1>
                <div className="flex flex-col space-y-2">
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        icon={<EmailIIcon />}
                        name="email"
                        type="email"
                        placeholder={strings.email_address}
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        icon={<PasswordIcon />}
                        name="password"
                        type="password"
                        placeholder={strings.password}
                    />
                </div>
                {error && (
                    <p className="p-2 text-xs text-red-800 bg-red-200 w-full rounded-sm">{error}</p>
                )}
                <Button
                    disabled={loginUser.isLoading}
                    text={strings.log_in.toUpperCase()}
                    type="submit"
                />
            </form>
        </Layout>
    );
};
