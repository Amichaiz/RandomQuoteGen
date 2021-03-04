import React from 'react';
import { quotes } from './components/quotes';
import { color } from './components/color';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      obj: '',
      compcolor: '',
    }
    console.log(color);
  }
  componentDidMount() {
    this.genquate()
    this.gencolor()
  }
  genquate = () => {
    let rnd = Math.floor(Math.random() * 94)
    this.setState({ obj: quotes[rnd] })
    this.gencolor()
  }
  gencolor = () => {
    let rnd = Math.floor(Math.random() * 50)
    this.setState({ compcolor: color[rnd] })
  }
  render() {
    let bg = this.state.compcolor

    return (
      <div style={{ backgroundColor: bg }}>
        <style>{`body { background-color: ${bg}; }`}</style>
        <div id="box" style={{ backgroundColor: 'white', color: `${bg}` }}>
          <h1 id='quote'>"{this.state.obj.quote}"</h1>
          <h4 id='author'>-{this.state.obj.author}-</h4>
          <button id='but' style={{ backgroundColor: bg, color: 'white'}} onClick={this.genquate}>New Quote</button>
        </div>
      </div>
    )
  }
}

export default App;
