import React, { Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            number:0
        }
        this.increase=this.increase.bind(this)
        this.decrease=this.decrease.bind(this)
    }

    increase(){
        this.setState({
            number: this.state.number+1
        })
    }

    decrease(){
        this.setState({
            number: this.state.number-1
        })
    }

    render() {
        return(
            <>
                <h1>카운터</h1>
                <h1>{this.state.number}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
            </>
        )
    }
}

export default Counter