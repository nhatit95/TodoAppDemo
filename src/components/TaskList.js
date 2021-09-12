import React from 'react';
import ListItem from './ListItem';
import {connect} from 'react-redux';
import * as actions from '../actions/IndexAction'
// import tasks from '../reducers/TasksReducer';

class TaskList extends React.Component{

    constructor(props){
    super(props);
    this.state = {
      txtNameFilter: '',
      slStatusFilter: -1, //-1 là tất cả, 1 là kích hoạt, -1 là ẩn
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name] : value,
    });
    if(name === "txtNameFilter"){
      this.props.onFilterTask(event.target.value.toLowerCase(), this.props.filterTask.status);
    }else{
      this.props.onFilterTask(this.props.filterTask.keyword, event.target.value.toLowerCase());
    }
  }

  render(){
    console.log('List render is running');
    return(
          <div>
            <table className="table table-bordered table-hover mt center">
              <thead>
                <tr>
                  <th className="center">NO.</th>
                  <th className="center">Task name</th>
                  <th className="center">Status</th>
                  <th className="center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input 
                    type="text" 
                    name="txtNameFilter" 
                    className="form-control" 
                    onChange={this.onChange} 
                    value={this.state.txtNameFilter}
                    />
                </td>
                  <td>
                    <select 
                      name="slStatusFilter" 
                      className="form-control" 
                      onChange={this.onChange} 
                      value={this.state.slStatusFilter}
                    >
                      <option value={-1}>All</option>
                      <option value={1}>Active</option>
                      <option value={2}>Inactive</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                <ListItem />
              </tbody>
            </table>  
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    tasks: state.tasks,
    filterTask: state.filterTask
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return{
    onFilterTask: (keyword, status) => {
          dispatch(actions.filterTask(keyword, status));
      }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

