import counterReducer from './counter';

export default (state = {}, action) => {
    return{
        count: counterReducer(state.count, action)
    }
}