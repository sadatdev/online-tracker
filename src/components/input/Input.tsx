import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: JSX.Element;
}

export const Input = ({ name, icon, ...rest }: IInputProps) => {
    return (
        <div className="bg-gray-200 flex items-center space-x-2 p-2.5 rounded text-gray-800">
            {icon}
            <input
                className="bg-gray-200 focus:outline-none p-1 placeholder-gray-600"
                name={name}
                {...rest}
            />
        </div>
    );
};
