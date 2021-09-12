import { combineReducers } from "redux";
import formControl from "./FormReducer";
import tasks from './TasksReducer'
import editingTask from "./EditingTaskReducer";
import searchTask from "./SearchReducer";
import filterTask from './FilterReducer'
import sortTask from "./SortReducer";

const rootReducer = combineReducers({
    tasks,
    formControl,
    editingTask,
    searchTask,
    filterTask,
    sortTask
});

export default rootReducer;