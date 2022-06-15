import React from 'react'
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css'

class Main extends React.Component {
  render (){
    let hornedBeast = [];
    data.forEach(beast => {
      hornedBeast.push(
        <HornedBeast
        title={beast.title}
        _id={beast._id}
        image_url={beast.image_url}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
        />
      )
    })
    return(
      <main>
        {hornedBeast}
        </main>
        )
    }
}

export default Main