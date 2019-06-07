import React from 'react';

class ZipResult extends React.Component {

  render(){
    console.log('Zipresult');
    console.log(this.props);
    return(
      <div>
      <label>{this.props.City}</label> <br />
      <label>{this.props.State}</label> <br />
      <label>{this.props.EstimatedPopulation}</label> <br />
      <label>{this.props.TotalWages}</label> <br />
      </div>
    );
  }
}

export default ZipResult;
