import React from "react";

class ContactDetails extends React.Component{
    render(){
        const data = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        )
        const blank =(<div>선택된 데이터가 없습니다.</div>)
        return(
            <div>
                <h2>Details</h2>
                {this.props.isSelcted ? data : blank}
            </div>
        )
    }
}
ContactDetails.defaultProps = {
    contact: {
        name:'',
        phone:''
    }
}
export default ContactDetails