import React,{Component} from "react";

class PhoneForm extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            phone:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        },()=>console.log(e.target.name))
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:'',
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="이름"
                       value={this.state.name}
                       onChange={this.handleChange}
                       name="name"
                />
                <input type="number"
                       placeholder="전화번호"
                       value={this.state.phone}
                       onChange={this.handleChange}
                       name="phone"
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm