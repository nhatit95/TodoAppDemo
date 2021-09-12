import * as types from '../constants/TypeActions'

export const showTasks = () =>  ({
    type: types.TASK_LIST
});

// action for sort data function
export const addTask = task => ({
    type: types.ADD_TASK,
    task //sort: sort
});

export const updateTask = (task) =>  ({
    type: types.UPDATE_TASK,
    task
});

export const deleteTask = (id) =>  ({
    type: types.DELETE_TASK,
    id
});

export const searchTask = (keyword) =>  ({
    type: types.SEARCH_TASK,
    keyword
});

export const filterTask = (keyword, status) =>  ({
    type: types.FILTER_TASK,
    keyword,
    status
});

export const sortTask = (by, value) =>  ({
    type: types.SORT_TASK,
    by,
    value
});


export const toggleStatus = (id, index) =>  ({
    type: types.TOGGLE_STATUS,
    id,
    index
});

export const createData = () =>  ({
    type: types.CREATE_DATA
});


export const toggleForm = () =>  ({
    type: types.TOGGLE_FORM
});

export const closeForm = () =>  ({
    type: types.CLOSE_FORM
});

export const openForm = () =>  ({
    type: types.OPEN_FORM
});

export const resetForm = () =>  ({
    type: types.RESET_FORM
});






