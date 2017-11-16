import uuid from 'uuid';
import database from '../firebase/firebase';


// ADD_****
export const add**** = (****) => ({
    type: 'ADD_****',
    ****
});

export const startAdd**** = (****Data = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            content = '', 
            author = '', 
            createdAt = 0,
            edited = false,
            comments = []
        } = expenseData;
        
        const **** = { content, author, createdAt, edited, comments };
        
        return database.ref(`users/${uid}/****s`).push(****).then((ref) => {
            dispatch(add****({
                id: ref.key,
                ...****
            }));
        });
        
    };  
};

// REMOVE_****
export const remove**** = ( { id } = {}) => ({
    type: 'REMOVE_****',
    id
});

export const startRemove**** = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/****s/${id}`).remove()
            .then(() => {
                dispatch(remove****({ id }));
            });
    };
};

// EDIT_****
export const edit****= ( id, updates ) => ({
    type: 'EDIT_****',
    id, 
    updates
});

export const startEdit**** = ( id, updates ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/****s/${id}`).update(updates)
            .then(() => {
                dispatch(edit****(id, updates));
            });
    }
};

// SET_****
export const set****s = (****s) => ({
    type: 'SET_****S',
    expenses
});


export const startSet**** = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/****s`).once('value').then((snapshot) => {
            const ****s = [];
            snapshot.forEach((childSnapshot) => {
                ****s.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                }); 
            });
            
            dispatch(set****s(****s));
        });
    };  
};







