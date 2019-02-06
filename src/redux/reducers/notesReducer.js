import { CREATE_NOTE, FETCH_NOTES, DELETE_NOTE, EDIT_NOTE, LOCK_TO_EDIT_NOTE } from '../actions/actionType';

const initialState = {
    items: [ {noteText:'note 1', id: 112}, {noteText:'note 2', id: 113} ],
    showItems: [],
    editId: null,
    maxId: 0,
}

export default function ( state = initialState, action ){
    switch( action.type){
        case CREATE_NOTE:{
            let id = state.maxId + 1;
            let items = state.items;
            let item = {...action.payload, id: id};
            items.push( item );
            return{
                ...state,
                items: [...items],
                showItems: [...items],
                maxId: id,
                editId: null,
            };
        }
        case FETCH_NOTES:{
            let items = state.items;
            return{
                ...state,
                showItems: [...items],
                editId: null,
            };
        }
        case EDIT_NOTE:{
            let item = {...action.payload, id: action.id};

            let items = state.items.map( x => {
                if( x.id === action.id )
                    return item;
                return x;
            } );

            console.log('upd data ', items[0], item);
            return {
                ...state,
                items: [...items],
                showItems: [...items],
                editId: null,
            }
        }
        case DELETE_NOTE:{
            let items = state.items.filter( item => ( item.id !== action.id ) );
            return {
                ...state,
                items: [...items],
                showItems: [...items],
                editId: null,
            };
        }
        case LOCK_TO_EDIT_NOTE:{
            return {
                ...state,
                editId: action.id,
            }
        }
        default:
            return state;
    }
}