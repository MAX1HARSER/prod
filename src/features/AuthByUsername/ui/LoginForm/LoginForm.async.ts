import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./LoginForm'));
    }, 1000);
}));
