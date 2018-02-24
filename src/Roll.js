import React, { Component } from 'react';

class Roll extends Component {
  constructor(props) {
    super(props);

    this.makeStruck = this.makeStruck.bind(this);
    this.state = {
      checked: false,
    };
  }

  makeStruck() {
    const { checked } = this.state;

    this.setState({
      checked: !checked,
    });
  }

  render() {
    const { anItem } = this.props;
    const { checked } = this.state;
    let theItem = anItem;
    if (checked)
      theItem = <strike>{anItem}</strike>;
    return (
      <div>
        <label>
          <input type="checkbox" onClick={this.makeStruck} checked={checked} />
          {theItem}
        </label>
        <br />
      </div>
    );
  }
}

export default Roll;
