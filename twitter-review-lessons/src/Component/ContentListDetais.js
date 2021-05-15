import React, { Component} from 'react';

class ContentListDetais extends Component {
    render() {
        const{writer, date, content} = this.props.data;
        const list = {
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            boxSizing:'border-box',
            paddingLeft:'16px',
            marginLeft:'16px',
            marginTop: '16px',
            width:'98%',
            height:'100px',
            border: '1px solid transparent',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            listStyle:'none'
        }
        return(
            <ul style={list}>
                <li>{writer}</li>
                <li>{date}</li>
                <li>{content}</li>
            </ul>
        )
    }
}

export default ContentListDetais
