import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Theme Decorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import NotFoundPagePage from './NotFoundPage';

const meta: Meta<typeof NotFoundPagePage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPagePage,
};
export default meta;
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
