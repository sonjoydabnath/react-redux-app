import React, { Component } from 'react'
import EditNoteForm from './editNote';

class ShowNotes extends Component {

    constructor(props){
        super(props);

        this.onDeleteHandle = this.onDeleteHandle.bind( this );
    }

    onDeleteHandle( noteId ){
        return () => this.props.deleteNote( noteId );
    }

    onEditClickHandler( noteId ){
        return () => this.props.lockEditNote( noteId );
    }

    

    render() {
        let notesView = this.props.notes.map( note => {
            if( this.props.editId && note.id === this.props.editId ){
                return < EditNoteForm key={note.id} note={note} editId={this.props.editId} editNote={this.props.editNote} />
            }
            return (
                <div className='note' key={note.id}>
                    <div className='note-content'> {note.noteText} </div>
                    <div className='note-action'>
                        <button className='btn btn-green' onClick={ this.onEditClickHandler(note.id) } > Edit </button>
                        <button className='btn btn-danger' onClick={ this.onDeleteHandle(note.id) } > Delete </button>
                    </div>
                </div> 
            )
        } );
        return (
            <div>
                {notesView}
            </div>
        )
    }
}

export default ShowNotes;