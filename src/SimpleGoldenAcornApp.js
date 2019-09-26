import React from 'react';
import Display from './display';
import Button from './button';


class SimpleGoldenAcornApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
        this.buyOne = this.buyOne.bind(this);
        this.eatOne = this.eatOne.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    buyOne() {
        this.setState({ number: this.state.number + 1 });
    }

    eatOne() {
        if (this.state.number > 0) {
            this.setState({ number: this.state.number - 1 });
        }
    }

    handleKeyDown(event) {
        if (event.keyCode === 38) {
            this.buyOne();
        } else if (event.keyCode === 40) {
            this.eatOne();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <div>
                <Button func={this.buyOne} str='🌰 Buy One 🌰' />
                <Display>{this.state.number}</Display>
                <Button func={this.eatOne} str='🌰 Eat One 🌰' />
            </div>
        );
    }
}

export default SimpleGoldenAcornApp