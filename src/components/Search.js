import React from 'react'
import * as actions from '../actions/IndexAction'
import {connect} from 'react-redux'

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      txtSearch: '',
    }
  }
  onChange = (event) => {
    this.setState(state => ({
      ...state,
      txtSearch: event.target.value.toLowerCase()
    }));
    this.props.onSearch(event.target.value.toLowerCase());
  }
  
  render(){
    console.log('Search render is running');
    return(
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">                
            <input 
                name="txtSearch" 
                className="form-control search" 
                placeholder="Enter your task name..."
                onChange={this.onChange}
                value={this.state.txtSearch}
            />
            <span className="blue">
                <i className="fa fa-search" aria-hidden="true"></i>
                &nbsp;
                Search
            </span>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return{
      onSearch: (keyword) => {
          dispatch(actions.searchTask(keyword));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
