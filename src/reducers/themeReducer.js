import { types } from '../actions/themeActions';

const defaultState = {
    theme: 'light',
};

export default function (state = defaultState, action) {
    switch (action.type) {
    case types.TOGGLE_THEME:
        return {
            ...state,
            theme: state.theme === 'light'? 'dark' : 'light',
        };

    default:
        return state;
    }
}
