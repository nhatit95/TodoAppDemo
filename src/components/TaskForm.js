import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/IndexAction'

class TaskForm extends React.Component{
  constructor(props){
        super(props);
        this.state = {
            id: null,
            name: '',
            status: false
        }
    }

    componentDidMount(){
        if(this.props.taskEditing){
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status,
            });
        }
    }

    //Mo form roi van co the nhan data
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.taskEditing){
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status,
            });
        }else{
            this.props.onReset();
        }
    }

     onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value === 'true'? value=true:value=false;
        }
        this.setState({
            [name] : value,
        });
        
     }

     onReset = () => {
        this.props.onReset();
     }

     onCloseForm = () => {
        this.props.onReset();
        this.props.onCloseFormRedux();
       }

     onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.props.onReset();
        this.props.onCloseFormRedux();
     }

  render(){
    console.log('Form render is running');
      var {id} = this.state;
    return(   
        <div className="panel panel-info">
            <div className="panel-heading">
            <h3 className="panel-title add-task">{id!== null?"Update a task":"Add a new task" }</h3>
            <i 
                className="fa fa-times-circle" 
                aria-hidden="true"
                onClick = {this.onCloseForm}
            >

            </i>
            </div>
            <div className="panel-body">

            <form onSubmit = {this.onSubmit} method="POST">
                <label className="pt">Task Name:</label>
                
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    value = {this.state.name}
                    onChange = {this.onChange}
                />
                
                <label className="pt">Status:</label>                  
                <select 
                    name="status" 
                    className="form-control" 
                    value = {this.state.status}
                    onChange = {this.onChange}
                >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                </select>
            
                <button type="submit" className="btn btn-primary mt">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    &nbsp;
                    Save
                </button>
                <button type="button" className="btn btn-danger mt" onClick={this.onReset}> 
                    <i className="fa fa-ban" aria-hidden="true"></i>
                    &nbsp;
                    Cancel
                </button>
            </form>
            </div>
        </div>
      
    );
  }
}


const mapStateToProps = (state) => {
    return{
        taskEditing: state.editingTask
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        onAddTask: (task) => {
            dispatch(actions.addTask(task));
        },
        onCloseFormRedux: () => {
            dispatch(actions.closeForm());
        },
        onReset: () => {
            dispatch(actions.resetForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

