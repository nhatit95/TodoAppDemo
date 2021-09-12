import React from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends React.Component{

  render(){
    console.log('Control render is running');
    return(        
        <div>
            <div className="row mt">
              <Search />
              <Sort  />
            </div>
        </div>
    );
  }
}

export default Control;

