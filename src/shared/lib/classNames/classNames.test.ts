import { classNames } from './classNames';

describe('classNames', () => {
    test('only class', () => {
        expect(classNames('class', {}, [])).toBe('class');
    });

    test('class with true mods', () => {
        expect(classNames(
            'class',
            { hovered: true, scrollable: true },
            [],
        )).toBe('class hovered scrollable');
    });

    test('class with false mods', () => {
        expect(classNames(
            'class',
            { hovered: true, scrollable: false },
            [],
        )).toBe('class hovered');
    });

    test('class with additional', () => {
        expect(classNames(
            'class',
            {},
            ['cls1', 'cls2'],
        )).toBe('class cls1 cls2');
    });
});
