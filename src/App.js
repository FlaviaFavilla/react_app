import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './todo/Todo.js';
import styled from 'styled-components';
import  {Wrapper}  from './global-style.js';
import {Menu} from "./header/Menu";

class App extends Component {

    render(){
        return(

            <Wrapper>
                <Menu></Menu>
                Hello {this.props.name}
                <Todo />
            </Wrapper>

        );
    }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //           <h1>React_App</h1>
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
