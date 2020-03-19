import React from 'react';
// import { useState } from 'react'

const Todos =({ todos, deleteTodo })=>{

    const List = todos.length ? (
        todos.map(items =>{
            return(<div key={todos.id}>
                <p >{items.content}</p></div>
                )
                <span onclick={deleteTodo}> {List} </span>
        })
    ) : 
    (
       null  return (<p className='center'>you have no todos</p>)
    )

    return(
        
      <div className='todos collection'>
      
      </div>
    )
}

export default Todos;