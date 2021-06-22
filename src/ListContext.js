import React, { createContext, useReducer } from 'react';
import reducer from './ListReducer';

export const ListContext = createContext({todoList: [], filteredList: []});

export const ListProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {todoList: [], filteredList: []});
    return (
        <ListContext.Provider value={{state, dispatch}}>
            {props.children}
        </ListContext.Provider>
    );
}