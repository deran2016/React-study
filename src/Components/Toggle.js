import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggle: true};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            isToggle: !state.isToggle
        }));
    }

    render() {
        return (
            <input 
                type="button" 
                value={this.state.isToggle ? "ON" : "OFF"} 
                onClick={this.toggle}
            >
            </input>
        );
    }
}

export default Toggle;