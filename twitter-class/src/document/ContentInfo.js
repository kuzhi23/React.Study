import React, { Component} from 'react';

class ContentInfo extends Component {
    render() {
        console.log(this.props.data)
        const {writer, date, content} = this.props.data

        const listBox = {
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
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'
        }

        return (
            <div  style={listBox}>

                <div>{writer}</div>
                <div>{date}</div>
                <div>{content}</div>

            </div>
        )

    }
}
export default ContentInfo