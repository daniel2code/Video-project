import React from 'react';
import { useState } from 'react';
// import About from './About';

function Home() {

    const [value, setvalue] = useState(null)

    const url = 'https://www.anapioficeandfire.com/api/books?pagesSize=30';
  const data =  fetch(url).then(function(response){
        let cont = response.json()
        setvalue=cont
    })

    return (
        <div>

        <ul>
        <li> <a href='/'>Home</a> </li>
        <li> <a href='About.js'>About</a> </li>
        <li> <a href='Contact.js'>Contact</a> </li>
        </ul>

        <h1>Fetch API</h1>
        <div>{value}</div>
        
            
        </div>
    )
}

export default Home;