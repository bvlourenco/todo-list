import React, { useContext, useState } from 'react';
import { ACTION } from '../ListReducer';
import { ListContext } from '../ListContext';

const SortButton = () => {
    const { dispatch } = useContext(ListContext);
    const [count, setCount] = useState(0);
    const orderNotesHandler = (e) => {
        e.preventDefault();
        dispatch({ type: ACTION.SORT_NOTES, payload: count});
        setCount((count + 1) % 3);
    };
    return (
        <div>
            <button onClick={orderNotesHandler} type="submit">
                <p>Sort Tasks</p>
            </button>
        </div>
    );
};

export default SortButton;