import React, {memo} from 'react';

const HabitAddFrom = memo(props => {
    const formRef = React.createRef()
    const inputRef = React.createRef();

    const onSubmit =(e)=>{
        e.preventDefault();
        const name = inputRef.current.value
        name && this.props.onAdd(name)
        // this.inputRef.current.value=''
        formRef.current.reset();
    }
    return (
        <form className="add-form" onSubmit={onSubmit} ref={formRef}>
            <input ref={inputRef}  type="text" className="add-input" placeholder="Habit"/>
            <button className="add-button">Add</button>
        </form>
    )
})

export default HabitAddFrom;