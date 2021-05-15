import React, {Component} from 'react';
import Habit from "./habit";
import HabitAddFrom from "./habitAddFrom";

class Habits extends Component {

    handleIncrement= (value) =>{
      this.props.onIncrement(value)
    }

    handleDecrement= (value) =>{
        this.props.onDecrement(value)
    }

    handleDelete = (value) =>{
        this.props.onDelete(value)
    }

    handleAdd = (value) =>{
        this.props.onAdd(value)
    }
    render() {
        return (
            <>
                <HabitAddFrom onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(data =>{
                       return( <Habit data={data} key={data.id}
                                      onIncrement={this.handleIncrement}
                                      onDecrement={this.handleDecrement}
                                      onDelete={this.handleDelete}/>)
                    })}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;