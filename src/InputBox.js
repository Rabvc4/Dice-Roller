import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '2d6+10 Slashing + 2d6 Holy'};  //Make this part {value: ''} to initialize with empty field

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Text was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" className="btn btn-danger" value="Roll" />
      </form>
    );
  }
}

export default InputBox;
