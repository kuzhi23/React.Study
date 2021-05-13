import React, { Component} from 'react';
import ContentInfo from "./ContentInfo";

class ContentList extends Component {

    render() {
        const{content} = this.props
        console.log(this.props.content)
        const list = content.map((data)=>{
            return(<ContentInfo key={data.id} data={data}/>)
        })
        return(
            <div>
                {list}
            </div>
        )
    }
}


export default ContentList