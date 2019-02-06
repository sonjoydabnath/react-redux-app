import React, { Component } from 'react'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchNotes, createNote, editNote, deleteNote, lockEditNote } from '../redux/actions/notesActions';
import ShowNotes from './showNotes';
import CreateNoteForm from './createNote';



class Notes extends Component {

    componentWillMount() {
        this.props.fetchNotes();
    }
    render() {
        return (
            <div>
                <h1> Lets take some notes! </h1>
                <CreateNoteForm createNote={this.props.createNote} />
                <ShowNotes notes={this.props.notes} editId={this.props.editId} deleteNote={this.props.deleteNote} lockEditNote={this.props.lockEditNote} editNote={this.props.editNote} />
            </div>
        );
    }
}

Notes.propTypes = {
    notes: PropTypes.array.isRequired,
    createNote: PropTypes.func.isRequired,
    fetchNotes: PropTypes.func.isRequired,
    editNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    lockEditNote: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    notes: state.notes.showItems,
    editId: state.notes.editId,
});

const actions = {
    createNote,
    fetchNotes,
    editNote,
    deleteNote,
    lockEditNote,
}

export default connect(mapStateToProps, actions)(Notes);
