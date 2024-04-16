import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Theme Decorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};
export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Модальное окно',
    },
};
export const Dark: Story = {
    args: {
        isOpen: true,

        children: 'Модальное окно',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
