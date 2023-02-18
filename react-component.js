import React from 'react';
import PropTypes from 'prop-types';

// const ReactComponent = ({value, addOne}) => (
//   <div id="react-component">
//     <h1>I'm the react component</h1>
//     <span>value: {value} </span>
//     <button onClick={addOne}>
//       Add one !
//     </button>
//   </div>
// );

class ReactComponent extends React.Component {
  render() {
    return (
        <div id="react-component">
          <h1>I'm the react component</h1>
          <span>value: {this.props.value} </span>
          <button onClick={this.props.addOne}>
            Add one !
          </button>
        </div>
    )
  }
}

ReactComponent.propTypes = {
  value: PropTypes.number,
  addOne: PropTypes.func
};

export default ReactComponent;