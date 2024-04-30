import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Theme Decorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};
export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [
        // TranslationDecorator,
        StoreDecorator({
            loginForm: { username: 'admin', password: 'admin' },
        }),
    ],
};
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: { username: 'admin', password: 'admin' },
        }),
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: 'admin', password: 'admin', error: 'error' },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        // TranslationDecorator,
        StoreDecorator({
            loginForm: {
                username: 'admin', password: 'admin', isLoading: true,
            },
        }),
    ],
};
