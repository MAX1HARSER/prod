import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('state increment', () => {
        const state: CounterSchema = { value: 0 };
        expect(
            counterReducer(state, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
    test('state decrement', () => {
        const state: CounterSchema = { value: 0 };
        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({ value: -1 });
    });
    test('empty state', () => {
        expect(
            counterReducer(undefined, counterActions.decrement()),
        ).toEqual({ value: -1 });
    });
});
