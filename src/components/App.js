import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRemainingTime } from '../actions/timeActions';
import timeService from '../services/timeService';
import Header from './header/Header';

import './App.scss';

const TIMER_FREQUENCY = 1000; // every 1 second
const POLL_FREQUENCY = 10 * 1000; // 10 seconds

let updateTimerInterval;
let pollInterval;
let timeRemaining = 0;

const App = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const updateTime = async () => {
        timeRemaining = await timeService.requestUpdatedTime();
        dispatch(setRemainingTime(timeRemaining));
    };

    useEffect(async () => {
        await updateTime();
        updateTimerInterval = setInterval(() => {
            dispatch(setRemainingTime(timeRemaining > 0 ? --timeRemaining : 0));
        }, TIMER_FREQUENCY);

        pollInterval = setInterval(() => {
            updateTime();
        }, POLL_FREQUENCY);

        return () => {
            clearInterval(updateTimerInterval);
            clearInterval(pollInterval);
        };
    }, []);

    return (
        <div className="app-wrapper default">
            <Header />
            <div className="body">
                <h1>Welcome to your Inspera exam</h1>
                <hr />
                <div className="text-interaction">
                    <label>
                        <p>What is your answer?</p>
                        <input
                            placeholder="Type your text here..."
                        />
                    </label>
                </div>
                <hr />
                <div className={`mpc-interaction mpc-interaction-${theme}`}>
                    <label>
                        <input type="checkbox" value="Alternative 1" />
                        <p>Alternative 1</p>
                    </label>
                    <label>
                        <input type="checkbox" value="Alternative 2" />
                        <p>Alternative 2</p>
                    </label>
                    <label>
                        <input type="checkbox" value="Alternative 3" />
                        <p>Alternative 3</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default App;
