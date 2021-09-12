import * as types from '../constants/TypeActions'

var defaultData = JSON.parse(localStorage.getItem('tasks'));
var initialState = defaultData ? defaultData: [];

var tasks = (state = initialState, action) => {
    switch(action.type){
        case types.TASK_LIST:{
            return state;
        }
        case types.ADD_TASK:{
            if(action.task.id){
                var newTasks = [...state];  //Use Destructuring Assignment to Assign Variables from Objects
                for(let task of newTasks){
                    if(task.id === action.task.id){
                        task.name = action.task.name;
                        task.status = action.task.status;
                    }
                }
                localStorage.setItem('tasks', JSON.stringify(newTasks)); 
                return [...newTasks];
            }else{
                var newTask = {
                    id: Math.floor(Math.random()*10000),
                    name: action.task.name,
                    status: action.task.status
                }
                state.push(newTask);
                localStorage.setItem('tasks', JSON.stringify(state));
                return [...state];
            }
        }
        case types.TOGGLE_STATUS:{        
            let newTasks = [...state];  //Use Destructuring Assignment to Assign Variables from Objects
            for(let task of newTasks){
                if(task.id === action.id){
                    task.status = !task.status;
                }
            }
            localStorage.setItem('tasks', JSON.stringify(newTasks)); 
            return [...newTasks];
        }
        case types.DELETE_TASK:{
            let newTasks = [...state];  
            newTasks = newTasks.filter(item => item.id !== action.id);
            localStorage.setItem('tasks', JSON.stringify(newTasks)); 
            return [...newTasks];
        }
        case types.CREATE_DATA:{
            var tasks = [
                {
                  id: 1,
                  name: "Take a shower",
                  status: true
                },
                {
                  id: 2,
                  name: "Go to school",
                  status: false
                },
                {
                  id: 3,
                  name: "Study English with friends",
                  status: true
                },
                {
                  id: 4,
                  name: "Reading a new book",
                  status: true
                },
              ];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return tasks;
        }         
        default: return state;
    }
}

export default tasks;