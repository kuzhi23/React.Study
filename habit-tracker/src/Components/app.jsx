import React,{Component} from "react";
import '../app.css';
import Habits from "./habits";
import Navbar from "./navbar";

class App extends Component {
  id=4
  state = {
    habits:[
      {
        id: 1,
        name: 'Reading',
        count: 0
      },
      {
        id: 2,
        name: 'Running',
        count: 0
      },
      {
        id: 3,
        name: 'Coding',
        count: 0
      }
    ]
  }

  handleIncrement= (value) =>{
    // console.log(`handleIncrement ${value.name}`)
    const habits = this.state.habits.map(item => {
      if(item.id === value.id){
        return {...value,count: value.count+1}
      }
      return item
    })
    this.setState({
      habits:habits
    })
  }

  handleDecrement= (value) =>{
    // console.log(`handleDecrement ${value}`)
    const habits = this.state.habits.map(item => {
      if(item.id === value.id){
        const count = value.count-1
        return {...value,count: count < 0? 0: count}
      }
      return item
    })
    this.setState({
      habits:habits
    })

  }

  handleDelete = (value) =>{
    const habits = this.state.habits.filter(item => item.id !== value.id)
    this.setState({
      habits:habits
    })

  }

  handleAdd = (value) => {
    const habits = [...this.state.habits, {id: this.id++, name:value, count:0 }]
    this.setState({
      habits:habits
    },()=>console.log(this.state.habits))

  }

  handleRest = () =>{
    // const habits = this.state.habits.map(value =>{
    //   value.count = 0
    //   return value
    // });
    const habits = this.state.habits.map(item => {
      if(item.count !== 0){
        return{...item, count:0}
      }
      return item
    })
    this.setState({habits})
  }

  render() {
    return (
        <>
          <Navbar totalCount={this.state.habits.filter(item => item.count >0).length}/>
          <Habits habits={this.state.habits}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                  onAdd={this.handleAdd}
                  onReset={this.handleRest}/>
        </>
    );
  }
}

export default App;
