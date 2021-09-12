import * as types from '../constants/TypeActions'

var initialState = '';

var searchTask = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_TASK: {
            return action.keyword;
        }
        default: return state;
    }
}

export default searchTask;