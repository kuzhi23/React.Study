import React from "react";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetails";

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKey:-1,
            keyword:'',
            contactData: [
                {
                    name: 'hanjune',
                    phone: '010-0000-1234'
                },
                {
                    name: 'kakuki',
                    phone: '010-0000-4212'
                },
                {
                    name: 'nike',
                    phone: '010-0000-1562'
                },
                {
                    name: 'puma',
                    phone: '010-0000-0982'
                },
            ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
        this.setState({
            keyword: e.target.value
        })
    }
    handleClick(key){
        this.setState({
            selectedKey: key
        },()=>console.log(this.state.selectedKey))
    }
    render() {
        const makeList = (data)=>{
            console.log(this.state.selectedKey)
            data.sort();
            data = data.filter((contact)=>{
                return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1
            })
            return data.map((contact,i) =>{
                return(
                    <ContactInfo contact={contact} key={i} onClick={()=>this.handleClick(i)}/>
                )
            } )
        }
        return (
            <div>
                <h1>Contacts</h1>
                <input type='text' placeholder='search' value={this.state.keyword}onChange={this.handleChange}/>
                <div>{makeList(this.state.contactData)}</div>
                <ContactDetails isSelcted={this.state.selectedKey !== -1} contact={this.state.contactData[this.state.selectedKey]}/>
            </div>
        )
    }
}


export default Contact