import React from 'react';
import styled from 'styled-components';
import  {Heading}  from '../global-style.js';


const Title = () => {
    return (
      <div>
          <Heading>To-do List</Heading>
      </div>
    );
}

const TodoForm = ({addTodo}) =>{
    let input;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addTodo(input.value);
            input.value = "";
        }}>
            <label>
                Add new To-do :
                <input type="text" ref={node => {
                    input = node;
                }}  />
            </label>
            <input type="submit" value="Add" />
        </form>
    );
}

const TodoItem = ({todo, remove}) => {
    return(
        <li key={todo.id}>{todo.text} ({todo.id}) -
            <button onClick={() => {remove(todo.id)}} > X </button>
        </li>
    );
}

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (<TodoItem todo={todo} key={todo.id} remove={remove}/>)
    });
    return(
        <div>
            <ul>
                {todoNode}
            </ul>
        </div>
    );
}

class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items:[],
        }
    }
    addTodo(val){
        //assemble data
        const todo = {
            text: val,
            id: Date.now()
        }
        // update data
        this.state.items.push(todo);
        // update state
        this.setState({
            items: this.state.items,
        })
    }
    remove(id){
        // filter all todos except the one removed
        const remainder = this.state.items.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        // update state with filter
        this.setState({
            items: remainder
        });
    }

    render(){
        return(
            <div>
                <Title/>
                {/*<div>{JSON.stringify(this.state.items)}</div>*/}
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList
                    todos={this.state.items}
                    remove={this.remove.bind(this)}
                />
            </div>
        );
    }
}

export default Todo;