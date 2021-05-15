import React, { Component} from 'react';
import ContentListDetais from "./ContentListDetais";

class Contentlist extends Component {

    render() {

        const {contents} = this.props
        const contentList = contents.map((data)=>{
            console.log(data)
            return (<ContentListDetais data={data} key={data.uuid}/>)
        })
        return(
            <div>{contentList}</div>
        )
    }
}
export default Contentlist