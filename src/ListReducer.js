export const ACTION = {
    ADD_NOTE: 'add',
    DELETE_NOTE: 'delete',
    EDIT_NOTE: 'edit',
    CHANGE_NOTE_STATUS: 'status',
    FILTER_NOTES: 'filter',
    SORT_NOTES: 'sort'
}

export const reducer = (state, action) => {
    switch(action.type) {
        case ACTION.ADD_NOTE:
            return addNote(state, action);
        case ACTION.DELETE_NOTE:
            return deleteNote(state, action);
        case ACTION.EDIT_NOTE:
            return editNote(state, action);
        case ACTION.CHANGE_NOTE_STATUS:
            return changeNoteStatus(state, action);
        case ACTION.FILTER_NOTES:
            return filterNotes(state, action);
        case ACTION.SORT_NOTES:
            return sortNotes(state, action.payload);
        default:
            return state;
    }
}

function addNote(state, action) {
    const newNote = {
        id: state.todoList.length - 1,
        text: action.payload,
        done: false
    };

    const updatedTodoList = [...state.todoList, newNote];

    return {
        ...state,
        todoList: updatedTodoList,
        filteredList: updatedTodoList
    };
}

function deleteNote(state, action) {
    const updatedTodoList = state.todoList.filter(el => el.id !== action.payload);
    return {
        ...state,
        todoList: updatedTodoList,
        filteredList: updatedTodoList
    };
}

function editNote(state, action) {
    const note = getElement(state.todoList, action.payload.id);
    const updatedElement = {
        id: note.element.id,
        text: action.payload.text,
        done: note.element.done
    };
    return updateList(state, updatedElement, note.index);
}

function changeNoteStatus(state, action) {
    const note = getElement(state.todoList, action.payload);
    const updatedElement = {
        id: note.element.id,
        text: note.element.text,
        done: !note.element.done
    };
    return updateList(state, updatedElement, note.index);
}

function filterNotes(state, action) {
    if(action.payload) {
        return {
            ...state,
            filteredList: state.todoList.filter(el => el.done === false)
        };
    } else {
        return {
            ...state,
            filteredList: [...state.todoList]
        }
    }
}

function sortNotes(state, count) {
    if(count % 3 === 0) {
        const sortedList = state.todoList.sort(compareAZ);
        return {
            ...state,
            todoList: sortedList,
            filteredList: sortedList
        };
    } else if(count % 3 === 1) {
        const sortedList = state.todoList.sort(compareZA);
        return {
            ...state,
            todoList: sortedList,
            filteredList: sortedList
        };
    } else if(count % 3 === 2) {
        const sortedList = state.todoList.sort(compareID);
        return {
            ...state,
            todoList: sortedList,
            filteredList: sortedList
        };
    }
}

function getElement(list, id) {
    const el = list.find(el => el.id === id);
    const idx = list.indexOf(el);
    return {element: el, index: idx};
}

function updateList(state, element, index) {
    const updatedList = [
        ...state.todoList.slice(0, index),
        element,
        ...state.todoList.slice(index + 1)
    ];
    return {
        ...state,
        todoList: updatedList,
        filteredList: updatedList
    };
}

function compareAZ(element_a, element_b) {
    if (element_a.text.toLowerCase() < element_b.text.toLowerCase()) {
        return -1;
    } else if (element_a.text.toLowerCase() > element_b.text.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

function compareZA(element_a, element_b) {
    if (element_a.text.toLowerCase() < element_b.text.toLowerCase()) {
        return 1;
    } else if (element_a.text.toLowerCase() > element_b.text.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
}

function compareID(element_a, element_b) {
    if (element_a.id < element_b.id) {
        return -1;
    } else if (element_a.id > element_b.id) {
        return 1;
    } else {
        return 0;
    }
}

export default reducer;