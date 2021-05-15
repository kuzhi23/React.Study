import React, { Component} from 'react';
import CreateContent from "./CreateContent";
import Contentlist from "./Contentlist";

class App extends Component {
    constructor(props){
        super(props)
        this.uuid=3
        this.state = {
            tweets: [
                {
                    uuid: 1,
                    writer: "김코딩",
                    date: "2020-10-10",
                    content: "안녕 리액트"
                },
                {
                    uuid: 2,
                    writer: "박해커",
                    date: "2020-10-12",
                    content: "좋아 코드스테이츠!"
                }
            ]
        }
        this.handleCreate = this.handleCreate.bind(this)
    }

    handleCreate(data){
        const {tweets} = this.state
        console.log(data)
        this.setState({
            tweets:tweets.concat({
                uuid:this.uuid++,
                writer:'한준',
                date: new Date().toLocaleDateString(),
                ...data
            })
        },()=>console.log(this.state))
    }
    render() {
      return (
        <div>
          <CreateContent onClick={this.handleCreate}/>
            <Contentlist contents={this.state.tweets}/>
        </div>
      );
    }
}

export default App;
