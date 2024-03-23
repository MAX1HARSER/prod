import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: any) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
