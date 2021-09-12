import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/IndexAction'

class ListItem extends React.Component{

  onUpdateStatus = (id, index) => {
    this.props.onToggleStatus(id, index);
  }
  onDelete = (id) => {
      this.props.onDeleteTask(id);
  }
  onEdit = (task) => {
      this.props.onUpdateTask(task);
      this.props.onOpenForm();
  }

  render(){
    let tasks = [...this.props.tasks];
    // search functional
    if(this.props.keyword !== ''){
        tasks = tasks.filter( item => {
            return item.name.toLowerCase().indexOf(this.props.keyword) !== -1;
        })
    }

    // filter functional
    if(this.props.filterCases.keyword !== ''){
        tasks = tasks.filter( item => {
            return item.name.toLowerCase().indexOf(this.props.filterCases.keyword) !== -1;
        })
    }
    if(this.props.filterCases.status !== -1){
        tasks = tasks.filter( item => {
            if(this.props.filterCases.status === 1){
                return item.status === true;
            }else if(this.props.filterCases.status === 2){
                return item.status === false;
            }else{
                return item;
            }
        })
    }

    // sort functional
    if(this.props.sortCases){
        var check = this.props.sortCases;
        if(check.by === 'name'){
            if(check.value === 1){
                tasks.sort((a,b) => {
                    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
                })
            }else{
                tasks.sort((a,b) => {
                    return a.name === b.name ? 0 : a.name < b.name ? 1 : -1;
                })
            }
        }
        if(check.by === 'status'){
            if(check.value === 1){
                tasks.sort((a,b) => {
                    return a.status === b.status ? 0 : a.status < b.status ? 1 : -1;
                })
            }else{
                tasks.sort((a,b) => {
                    return a.status === b.status ? 0 : a.status < b.status ? -1 : 1;
                })
            }
        }
    }

    console.log('List Item render is running');
    return(
        tasks.map((task, index) => {
            return(
                <tr key={index}>
                    <td >{index}</td>
                    <td >{task.name}</td>
                    <td >                    
                    <span 
                        className={task.status === true? "label label-success pointer":"label label-danger pointer"}
                        onClick = {() =>this.onUpdateStatus(task.id, index)}
                    >
                        {task.status === true? "Active":"Inactive"}
                    </span>                    
                    </td>
                    <td >
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => this.onEdit(task)}
                    >
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        &nbsp;
                        Edit
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => this.onDelete(task.id)}
                    >
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                        &nbsp;
                        Delete
                    </button>
                    </td>
                </tr>
            );
        })
    );
  }
}

const mapStateToProps = (state) => {
    return{
        tasks: state.tasks,
        keyword: state.searchTask,
        filterCases: state.filterTask,
        sortCases: state.sortTask
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onToggleStatus: (id, index) => {
            dispatch(actions.toggleStatus(id, index));
        },
        onUpdateTask: (task) => {
            dispatch(actions.updateTask(task));
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

