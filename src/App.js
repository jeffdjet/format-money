import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //var newformat = this.state.value.toFixed(2);
    var newformat = parseFloat(this.state.value).toFixed(2);
    alert(newformat.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Money:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default App;