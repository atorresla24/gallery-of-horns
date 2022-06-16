import React from 'react'
import HornedBeast from './HornedBeast';
import './Main.css'

class Main extends React.Component {
  render (){
    let hornedBeast = [];
    this.props.data.forEach((beast, idx) => {
      hornedBeast.push(
        <HornedBeast
        title={beast.title}
        _id={beast._id}
        image_url={beast.image_url}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
        handleOnShow={this.props.handleOnShow}
        key={idx}
        />
      )
    }
  )
    return(
      <main>
        {hornedBeast}
        </main>
        )
    }
}

export default Main