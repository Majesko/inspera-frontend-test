import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../actions/themeActions';
import './Header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const timeRemaining = useSelector((state) => state.time.timeRemaining);
    const theme = useSelector((state) => state.theme.theme);
    const dispatchToggleTheme = () => dispatch(toggleTheme());

    return (
        <div className={`header header-${theme}`}>
            <div className='header-wrapper'>
                <div className="candidate">Front-end Test Candidate</div>
                <div className={`time-remaining time-remaining-${theme}`} data-testid='counter'>
                    { timeRemaining }
                    {' '}
                    seconds remaining
                </div>
            </div>
            <button onClick={dispatchToggleTheme} type="button" className={`theme-toggle theme-toggle-${theme}`}>
                { theme === 'dark' ? 'Light' : 'Dark' } mode
            </button>
        </div>
    );
};

export default Header;
