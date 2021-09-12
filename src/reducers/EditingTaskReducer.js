import * as types from '../constants/TypeActions'
// console.log(types);

var initialState = {
    id: null,
    name: '',
    status: false
};

var editingTask = (state = initialState, action) => {
    switch(action.type){
        case types.UPDATE_TASK:{
            return action.task;
        }
        case types.RESET_FORM:{
            return {
                id: null,
                name: '',
                status: false
            };
        }
        default: return state;
    }
}

export default editingTask;