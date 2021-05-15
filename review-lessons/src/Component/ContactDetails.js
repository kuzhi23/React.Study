import React from "react";

class ContactDetails extends React.Component{
    render(){
        console.log(this.props.contacts)
        const selectList = (
            <div>
                <p>{this.props.contacts.name}</p>
                <p>{this.props.contacts.phone}</p>
            </div>
        )
        const blank = (<div>아무것도 선택안되엇다 빠끄</div>)
        return(
            <div>
            <h1>Details</h1>
                {this.props.isSelectd ? selectList : blank}
            </div>
        )
    }
}

ContactDetails.defaultProps = {
    contacts:{
        name:'',
        phone:''
    }
}

export default ContactDetails