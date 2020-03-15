import React from 'react';

import './index.css';
import ButtonsPanel from './components/ButtonsPanel';
import Tile from './components/Tile';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.state = {
      color: 'black',
    }
  }

  handleColorChange(passedColor){
    this.setState({
      color: passedColor
    })
  }

  render(){
    return(
      <div>
        <ButtonsPanel onAction={this.handleColorChange}/>
        <Tile color={this.state.color}/>
      </div>
    )
  }
}

export default App;
