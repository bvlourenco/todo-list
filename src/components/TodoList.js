import React, { useContext } from 'react';
import Note from './Note';
import { ListContext } from '../ListContext';

const TodoList = () => {
    const { state } = useContext(ListContext);
    return (
        <div>
            <ul>
                {state.filteredList.map((note) => (
                    <Note note={note} key={note.id} />
                ))}
            </ul>

        </div>
    );
};

export default TodoList;