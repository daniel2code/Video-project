import React, { Component } from 'react';
import Todos from './Todos'
 
class App extends Component{
  state={
     todos:[
       {id: Math.random(), content:'buy some milk'},
       {id2:Math.random(), content:'excercise today'}
     ]
  }
  deleteTodo=(id)=>{
     this.state.todos.filter(todos=>{
       return todos !==id
     })   
  }
       render()
    
      
       {
         return (
           <div>
            <h1 className='center blue-text'>Todos</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
           </div>
         )
       }

}
export default App;
