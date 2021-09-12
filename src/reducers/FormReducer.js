import * as types from '../constants/TypeActions'
// console.log(types);

var initialState = false;

var formControl = (state = initialState, action) => {
    switch(action.type){
        case types.TOGGLE_FORM:{
            return !state;
        }
        case types.CLOSE_FORM:{
            state = false;
            return state;
        }
        case types.OPEN_FORM:{
            state = true;
            return state;
        }
        
        default: return state;
    }
}

export default formControl;