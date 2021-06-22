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
            <button className="sort-button" onClick={orderNotesHandler} type="submit">
                <p>Sort Tasks</p>
            </button>
            {count === 0 && (
                <p className="margin-0 info-order">Ordered by creation date</p>
            )}
            {count === 1 && (
                <p className="margin-0 info-order">Ordered by Alphabetical order - from A to Z</p>
            )}
            {count === 2 && (
                <p className="margin-0 info-order">Ordered by Alphabetical order - from Z to A</p>
            )}
        </div>
    );
};

export default SortButton;