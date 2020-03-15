import React from 'react';
import '../index.css';

class ButtonsPanel extends React.Component{

    constructor(props){
        super(props);
        this.changeToRed = this.changeToRed.bind(this);
        this.changeToYellow = this.changeToYellow.bind(this);
        this.changeToGreen = this.changeToGreen.bind(this);
        this.changeToTeal = this.changeToTeal.bind(this);
    }

    changeToRed() {
        this.props.onAction('red')
    }

    changeToYellow() {
        this.props.onAction('yellow')
    }

    changeToGreen() {
        this.props.onAction('green')
    }

    changeToTeal() {
        this.props.onAction('teal')
    }

    render(){
    return (
        <div><h2>This is the buttons panel:</h2>
            <div className='buttonsPanel'>
                <p className='colorButton' onClick={this.changeToRed}>Red</p>
                <p className='colorButton' onClick={this.changeToYellow}>Yellow</p>
                <p className='colorButton' onClick={this.changeToGreen}>Green</p>
                <p className='colorButton' onClick={this.changeToTeal}>Teal</p>
            </div>
        </div>
    )};
}

export default ButtonsPanel;