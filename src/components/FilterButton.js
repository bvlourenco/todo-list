import React, { useContext } from 'react';
import { ACTION } from '../ListReducer';
import { ListContext } from '../ListContext';

const FilterButton = () => {
    const { dispatch } = useContext(ListContext);
    const filterNotesHandler = (e) => {
        dispatch({ type: ACTION.FILTER_NOTES, payload: e.target.checked });
    };
    return (
        <div className="row">
            <input onClick={filterNotesHandler} type="checkbox" />
            <p>Hide Completed Tasks</p>
        </div>
    );
};

export default FilterButton;