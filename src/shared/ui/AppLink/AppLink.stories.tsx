import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Theme Decorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        children: 'text',
        to: '/',
    },
};
export default meta;
type Story = StoryObj<typeof meta>

export const LightPrimary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};
export const LightSecondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};
export const LightRed: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
};
export const DarkPrimary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const DarkSecondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const DarkRed: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
