import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    classes?: string;
}

export const Button = ({ text, classes, ...rest }: IButtonProps) => {
    const allClasses =
        'bg-blue-600 hover:bg-blue-800 text-gray-200 text-xs font-semibold uppercase px-5 py-2.5 rounded disabled:opacity-50 ' +
        classes;
    return (
        <button className={allClasses} {...rest}>
            {text}
        </button>
    );
};
