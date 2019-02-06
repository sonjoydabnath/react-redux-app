import React, { Component } from 'react'


class CreateNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteText: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.createNote( {noteText: this.state.noteText} );
        this.setState( {noteText: ''} );
    }

    render() {
        return (
            <div className='note'>
                <form onSubmit={this.onSubmit}>
                    <textarea rowa={5} name='noteText' placeholder='Write a note!' value={this.state.noteText} onChange={this.onChange} required />
                    <span> {'\u00A0'} {'\u00A0'} </span>
                    <input type='submit' value='post' />
                </form>
            </div>
        )
    }
}


export default CreateNoteForm;