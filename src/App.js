import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as actions from './actions/IndexAction'

class App extends React.Component{

  // opt 1 la them con 2 la sua
  onToggleForm = () => {
    this.props.onReset();
    this.props.onToggleForm();
  }

  render(){
  console.log('App render is running');
  var eleTaskForm = this.props.isShowForm? <TaskForm  /> : '';
    return(
      <div className="container content">
        <h2 className = "center mb">Todo List Project Management</h2>
        
        <div className="row">
          <div className={this.props.isShowForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>  
           {eleTaskForm}
          </div>
        <div className={this.props.isShowForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
           <button type="button" className="btn btn-primary " onClick = {() => this.onToggleForm()}>
              <i className="fa fa-plus" aria-hidden="true"></i>
              &nbsp;
              Add a new task
            </button>
            <button type="button" className="btn btn-success " onClick = {this.props.onCreateData}>
              Create daily task
            </button>
          <Control onSearch={this.onSearch} onSort={this.onSort}/>
          <TaskList 
            onFilter={this.onFilter}
          />
        </div>

        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    isShowForm: state.formControl
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return{
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onReset: () => {
      dispatch(actions.resetForm());
    },
    onCreateData: () => {
      dispatch(actions.createData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
