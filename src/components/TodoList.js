import React, { useContext } from 'react';
import Note from './Note';
import { ListContext } from '../ListContext';

const TodoList = () => {
    const { state } = useContext(ListContext);
    return (
        <div>
            {state.filteredList.map((note) => (
                <Note note={note} key={note.id} />
            ))}
        </div>
    );
};

export default TodoList;