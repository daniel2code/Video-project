import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    const {ninjas, nationality} = this.props
    let nations = nationality ; 
    // console.log(ninjas, nations)
    
    const nationList = nations.map(nation =>{
      return(<div key={Math.random()}>
      <div>Country:{nation.country} </div>
      <div>State:{nation.state} </div><br/>
      </div>)
    } )

  const  ninjasList = ninjas.map(ninja => {
      return(
      <div className="ninjas" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age} </div>
        <div>Color: {ninja.color} </div>
        <div>{nationList}</div><br/>
      </div>
      )
    })
    return <div>
      {ninjasList}    
    </div>;
  }
}
export default Ninjas;
