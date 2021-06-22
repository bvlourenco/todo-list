import React, { useContext, useState } from "react";
import { ListContext } from "../ListContext";
import { ACTION } from "../ListReducer";

const Note = ({ note }) => {
  const { dispatch } = useContext(ListContext);
  const [text, setText] = useState(note.text);
  const [update, setUpdate] = useState(false);
  const noteHandler = (e) => {
    setText(e.target.value);
  };
  const submitNoteHandler = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch({
        type: ACTION.EDIT_NOTE,
        payload: { id: note.id, text: text },
      });
      setUpdate(false);
      setText(text);
    } else {
      alert("Cannot update note because the updated text is empty");
    }
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
      <input
        className="checkbox offset"
        onClick={changeNoteStatusHandler}
        type="checkbox"
        checked={note.done}
      />
      {!update && (
        <div className="note-description">
          <p className={`note ${note.done ? "completed" : ""}`}>{note.text}</p>
        </div>
      )}
      {update && (
        <div className="row">
          <input
            value={text}
            onChange={noteHandler}
            type="text"
          />
          <button
            className="submit-button"
            onClick={submitNoteHandler}
            type="submit"
          >
            <p>Submit changes</p>
          </button>
        </div>
      )}
      {!update && (
        <button className="edit-button" onClick={changeNoteContentHandler}>
          <p>Edit</p>
        </button>
      )}
      <button className="delete-button" onClick={deleteNoteHandler}>
        <p>Delete</p>
      </button>
    </div>
  );
};

export default Note;
