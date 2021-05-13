import React, { Component} from 'react';

class TextArea extends Component {
    constructor(props){
        super(props)
        this.state={
            content:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            content: e.target.value,
        })

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onCreate(this.state)
        this.setState({
            content:''
        })
    }
    render() {
        const screen = {
            margin:'16px'
        }
        const textBox = {
            width:'80%',
            height:'100px'
        }

        const textButton = {
            width:'20%',
            height:'106px'
        }
        
        const display = {
            display: 'flex'
        }
        return(
        <div style={screen}>
            <div>작성자 조한준</div>
            <form style={display} onSubmit={this.handleSubmit}>
                <textarea style={textBox} onChange={this.handleChange}/>
                <button style={textButton}>새글쓰기</button>
            </form>

        </div>
        )
    }
}

export default TextArea