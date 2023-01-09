import { types } from '../../src/actions/themeActions';
import reducer from '../../src/reducers/themeReducer';

describe('Time reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            theme: 'light',
        });
    });

    it('should set remaining time', () => {
        const action = {
            type: types.TOGGLE_THEME,
        }
        expect(reducer(undefined, action)).toEqual({
            theme: 'dark',
        });
    });
});
