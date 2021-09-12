import * as types from '../constants/TypeActions'

var initialState = {
    by: '',
    value: null //0 tat ca | 1 kich hoat | 2 chua kich hoat
};

var sortTask = (state = initialState, action) => {
    switch(action.type){
        case types.SORT_TASK: {
            return {
                ...state,
                by: action.by,
                value: parseInt(action.value)
            };
        }
        default: return state;
    }
}

export default sortTask;