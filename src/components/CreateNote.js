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
        if(text.trim() !== '') {
            dispatch({ type: ACTION.ADD_NOTE, payload: text });
            setText('');
        } else {
            alert('Note Empty');
        }
    };
    return (
        <form className="form">
            <input className="textarea" value={text} onChange={noteHandler} type="text" placeholder="Type your note here" size="100" />
            <button className="create-button" onClick={submitNoteHandler} type="submit">
                <p>Create</p>
            </button>
        </form>
    );
}

export default CreateNote;