import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 0 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(0);
    });
});
