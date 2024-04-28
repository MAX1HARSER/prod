import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Theme Decorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
};
export default meta;
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},

    decorators: [
        StoreDecorator({
            loginForm: { username: 'admin', password: 'admin', isLoading: true },
        }),
    ],

};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: { username: 'admin', password: 'admin', isLoading: true },
        }),
    ],
};

export const Authtarized: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};
