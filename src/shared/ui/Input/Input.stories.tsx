import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Theme Decorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
};
export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        type: 'text',
        placeholder: 'Введите логин',
        value: 'логин',
    },
};
export const Dark: Story = {
    args: {
        type: 'text',
        placeholder: 'Введите логин',
        value: 'логин',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
