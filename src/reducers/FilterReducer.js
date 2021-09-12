import * as types from '../constants/TypeActions'

var initialState = {
    keyword: '',
    status: -1 //0 tat ca | 1 kich hoat | 2 chua kich hoat
};

var filterTask = (state = initialState, action) => {
    switch(action.type){
        case types.FILTER_TASK: {
            return {
                ...state,
                keyword: action.keyword,
                status: parseInt(action.status)
            };
        }
        default: return state;
    }
}

export default filterTask;