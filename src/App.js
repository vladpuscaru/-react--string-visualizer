import React from 'react';
import SideBar from './SideBar/SideBar'
import Content from './Content/Content'
import Visualizer from './Visualizer/Visualizer'
import './App.css';

class App extends React.Component {

  state = {
    input: ''
  }

  onInputChangeHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  onClickHandler = (charIndex) => {
    let inputArray = this.state.input.split('');
    inputArray.splice(charIndex, 1);
    const input = inputArray.join('');

    this.setState({
      input: input
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>String Visualizer App</h1>
          <p>Makes your life better!</p>
        </div>
        <div className="container">
          <SideBar />
          <div className="content">
            <Content 
              input = { this.state.input }
              changeHandler = { this.onInputChangeHandler } />
            <Visualizer 
              input = { this.state.input } 
              clickHandler = { this.onClickHandler } />
          </div>
        </div>
        <div id="copy">&copy; Hidden Maze Game. Vlad Puscaru 2019</div>
      </div>
    );
  }
}

export default App;
