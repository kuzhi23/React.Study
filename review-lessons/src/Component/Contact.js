import React from "react";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetails";

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedKey:-1,
            keyword:'',
            contactData:[
                {
                    name:'Nike',
                    phone:'010-3241-2303'
                },
                {
                    name:'Address',
                    phone:'010-1322-5000'
                },
                {
                    name:'House',
                    phone:'010-1553-9402'
                },
                {
                    name:'BoP',
                    phone:'010-2223-0001'
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        this.setState({
            keyword:e.target.value
        })
    }
    handleClick(key){
        this.setState({
            selectedKey:key
        },()=>console.log(key))
    }
    render() {
        const listMap = (data)=>{
            data.sort();
            data = data.filter((listData)=>{
                return listData.name.toLowerCase().indexOf(this.state.keyword.toLowerCase())>-1
            })
            return data.map((contact, i)=>{
                return (<ContactInfo contact={contact} key={i} onClick={()=>this.handleClick(i)}/>)
            })
        }
        return(
            <div>
                <h1>Contacts</h1>
                <input type="text" placeholder="search" value={this.state.keyword}onChange={this.handleChange}/>
                {listMap(this.state.contactData)}
                <ContactDetails isSelectd ={this.state.selectedKey !== -1} contacts={this.state.contactData[this.state.selectedKey]}/>
            </div>
        )
    }
}

export default Contact