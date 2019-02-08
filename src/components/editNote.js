import React, { Component } from 'react'


class EditNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteText: props.note.noteText,
            id: parseInt( props.editId ),
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.editNote( this.state.id, {noteText: this.state.noteText} );
    }

    render() {
        return (
            <div className='note' key={this.props.note.id}>
                <form onSubmit={this.onSubmit}>
                    <textarea rowa={5} name='noteText' placeholder='Write a note!' value={this.state.noteText} onChange={this.onChange} required />
                    <span> {'\u00A0'} {'\u00A0'} </span>
                    <input type='submit' value='update' />
                </form>
            </div>
        )
    }
}


export default EditNoteForm;
