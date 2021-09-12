import React from "react";
import {connect} from 'react-redux'
import * as actions from '../actions/IndexAction'

class Sort extends React.Component {

  onClick = (by, value) =>{
    this.props.onSortTask(by,value);
  }
  linkClick(event){
    event.preventDefault();
  }

  render() {
    console.log('Sort render is running');
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort &nbsp;
            <span className="caret"></span>
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onClick('name', 1)}>
              <a role="button" onClick={this.linkClick} href="#home">
                <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                &nbsp;Name A-Z
              </a>
            </li>
            <li onClick={() => this.onClick('name', -1)}>
              <a role="button" onClick={this.linkClick} href="#home">
                <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>
                &nbsp;Name Z-A
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li onClick={() => this.onClick('status', 1)}>
              <a role="button" onClick={this.linkClick} href="#home">Active status</a>
            </li>
            <li onClick={() => this.onClick('status', -1)}>
              <a role="button" onClick={this.linkClick} href="#home">Inactive status</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    sortCase: state.sortTask
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return{
    onSortTask: (by, value) => {
      dispatch(actions.sortTask(by, value));
    } 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sort);