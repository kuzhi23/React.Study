import React,{Component} from "react";
import PhoneForm from "./PhoneForm";
import PhoneInfoList from "./PhoneInfoList";

class App extends Component {
    constructor(props){
        super(props)
        this.id=2
        this.state={
            information: [
                {
                    id: 0,
                    name: '김민준',
                    phone: '010-0000-0000'
                },
                {
                    id: 1,
                    name: '홍길동',
                    phone: '010-0000-0001'
                }
            ]
        }
        this.handleCreate = this.handleCreate.bind(this)
    }
    handleCreate = (data)=>{
        const {information} = this.state;
        this.setState({
            information: information.concat({id:this.id++,...data})
        },()=>console.log(information))
    }
    render() {
      return (
        <div>
            <PhoneForm onCreate = {this.handleCreate}/>
            <PhoneInfoList data={this.state.information}/>
        </div>
      );
    }
}

export default App;
