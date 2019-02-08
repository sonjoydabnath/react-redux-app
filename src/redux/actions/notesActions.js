import { CREATE_NOTE, FETCH_NOTES, EDIT_NOTE, DELETE_NOTE, LOCK_TO_EDIT_NOTE } from './actionType'

export function createNote( noteData ){
    console.log('creating a note!');
    return function( dispatch ) {
        dispatch({
            type: CREATE_NOTE,
            payload: noteData,
        });
    }
}

export function fetchNotes(){
    return function ( dispatch ) {
        dispatch({
            type: FETCH_NOTES,
        });
    }
}

export function editNote( noteId, newNoteData ){
    return function( dispatch ){
        dispatch({
            type: EDIT_NOTE,
            id: noteId,
            payload: newNoteData,
        });
    }
}

export function deleteNote( noteId ){
    return function ( dispatch ){
        dispatch({
            type: DELETE_NOTE,
            id: noteId,
        });
    }
}

export function lockEditNote( noteId ){
    return function( dispatch ){
        dispatch({
            type: LOCK_TO_EDIT_NOTE,
            id: noteId,
        });
    }
}