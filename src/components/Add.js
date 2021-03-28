import React from 'react';

class Add extends React.Component {
  state = {
    text: '',
  };

  render() {
    return (
      <div className="center">
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              className="validate"
              placeholder="What needs to be done"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            ></input>
            <button
              className="add-btn btn waves-effect waves-light"
              onClick={() => this.props.addItem(this.state.text)}
            >
              Add
              <i className="material-icons right">add_circle</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
