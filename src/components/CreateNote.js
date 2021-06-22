import React, { useContext, useState } from "react";
import { ListContext } from '../ListContext';
import { ACTION } from '../ListReducer';

const CreateNote = () => {
    const { dispatch } = useContext(ListContext);
    const [text, setText] = useState('');
    const noteHandler = (e) => {
        setText(e.target.value);
    };
    const submitNoteHandler = (e) => {
        e.preventDefault();
        dispatch({ type: ACTION.ADD_NOTE, payload: text });
        setText('');
    };
    return (
        <form className="form">
            <input value={text} onChange={noteHandler} type="text" />
            <button onClick={submitNoteHandler} type="submit">
                <p>Create</p>
            </button>
        </form>
    );
}

export default CreateNote;