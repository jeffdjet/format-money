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
    alert(this.formatMoney(this.state.value));
    event.preventDefault();
  }

  formatMoney(value){
    var newformat = parseFloat(value).toFixed(2);
    newformat = newformat.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    return newformat;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Money: 
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <p>
        <label>New format: {this.state.value ? this.formatMoney(this.state.value) : ""}</label></p>
      </form>
    );
  }
}


export default App;