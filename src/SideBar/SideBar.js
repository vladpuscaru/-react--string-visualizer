import React from 'react'
import Char from '../Char/Char'
import './SideBar.css'

class SideBar extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      alphabet: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
      ],
      showChars: []
    };
    this.state.showChars = this.state.alphabet;
  }

  onSearchChangeHandler = (event) => {
    let showChars = [...this.state.showChars];
    const searchedChars = event.target.value.split('');

    if (searchedChars.length > 0) {
      showChars = this.state.alphabet.filter((Achar) => {
        return searchedChars.find((Schar) => Achar === Schar);
      });
    } else {
      showChars = this.state.alphabet;
    }

    console.log(showChars);

    this.setState({
      showChars: showChars
    });
  }

  render() {
    const showCharsJSX = this.state.showChars.map((char, index) => {
      return (
        <Char char={ char } key={ index } />
      );
    });

    return (
      <div className="SideBar">
        <div className="query-search">
          <input
           type="text" 
           onChange={ this.onSearchChangeHandler } />
        </div>
        <div className="query-result">
          { showCharsJSX }
        </div>
      </div>
    );
  }
}

export default SideBar;