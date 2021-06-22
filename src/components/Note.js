import React, { useContext, useState } from "react";
import { ListContext } from "../ListContext";
import { ACTION } from "../ListReducer";

const Note = ({ note }) => {
  const { dispatch } = useContext(ListContext);
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const noteHandler = (e) => {
    setText(e.target.value);
  };
  const submitNoteHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.EDIT_NOTE, payload: { id: note.id, text: text } });
    setUpdate(false);
    setText("");
  };
  const deleteNoteHandler = () => {
    dispatch({ type: ACTION.DELETE_NOTE, payload: note.id });
  };
  const changeNoteStatusHandler = () => {
    dispatch({ type: ACTION.CHANGE_NOTE_STATUS, payload: note.id });
  };
  const changeNoteContentHandler = () => {
    setUpdate(true);
  };
  return (
    <div className="row">
      <input onClick={changeNoteStatusHandler} type="checkbox" checked={note.done}/>
      {!update && (
        <li className={`note ${note.done ? "completed" : ""}`}>{note.text}</li>
      )}
      {update && (
        <div>
          <input value={text} onChange={noteHandler} type="text" />
          <button onClick={submitNoteHandler} type="submit">
            <p>Submit changes</p>
          </button>
        </div>
      )}
      {!update && (
        <button onClick={changeNoteContentHandler}>
          <p>EDIT</p>
        </button>
      )}
      <button onClick={deleteNoteHandler}>
        <p>DELETE</p>
      </button>
    </div>
  );
};

export default Note;
