import authReducer from '../../reducers/auth';

test('should login and set uid', () => {
    const action = {
        type: 'LOGIN', 
        uid: '123abc'
    };
    const state = authReducer({}, action);
    
    expect(state).toEqual({ uid: '123abc' });
});

test('should logout and clear uid', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'foobar'}, action);
    
    expect(state).toEqual({ });
});