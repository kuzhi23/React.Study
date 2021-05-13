import '../App.css';
import React, { Component} from 'react';
import TextArea from "./TextArea";
import ContentList from "./ContentList";

class App extends Component {
    constructor(props){
        super(props)
        this.id = 3
        this.state={
            tweets: [
                {
                    id: 1,
                    writer: "김코딩",
                    date: "2020-10-10",
                    content: "안녕 리액트"
                },
                {
                    id: 2,
                    writer: "박해커",
                    date: "2020-10-12",
                    content: "좋아 코드스테이츠!"
                }
            ]
        }
        this.handleCreate = this.handleCreate.bind(this)
    }
    handleCreate(data){
        const{tweets} = this.state
        console.log(data, '나는 데이타')
        this.setState({
            tweets:tweets.concat({id:this.id++,writer:'조한준',date:new Date().toLocaleDateString(),...data})
        })
    }
    render() {
      return (
        <div>
          <TextArea onCreate={this.handleCreate}/>
            <ContentList content={this.state.tweets}/>
        </div>
      );
    }
}

export default App;
