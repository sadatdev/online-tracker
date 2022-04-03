import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button = ({ text, className, ...rest }: IButtonProps) => {
    const buttonClasses = cn('base-button', className);

    return (
        <button className={buttonClasses} {...rest}>
            {text}
        </button>
    );
};
