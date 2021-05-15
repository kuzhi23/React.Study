import React, { Component} from 'react';

class CreateContent extends Component {
    constructor(props){
        super(props)
        this.state={
            content: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            content: e.target.value
        },()=>console.log(this.state.content))
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onClick(this.state)
        this.setState({
            content:''
        })
    }

    render() {
        const screen = {
            margin: '16px'
        }
        const controlBox = {
            display:'flex'
        }
        const textBox = {
            width:'80%',
            height:'100px'
        }
        const textButton ={
            width:'20%',
            height:'106px'
        }
        return(
            <div style={screen}>
                <div>작성자 조한준</div>
                <form style={controlBox} onSubmit = {this.handleSubmit}>
                <textarea style={textBox} onChange={this.handleChange}/>
                <button style={textButton} >등록해주세요</button>
                </form>
            </div>
        )
    }
}

export default CreateContent