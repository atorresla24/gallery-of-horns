import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';


class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  };

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render(){
    return(
      <article>
        <id>{this.props._id}</id>
        <h2>{this.props.title}</h2>
        <p>{this.state.likes} Likes </p>
        <p onClick={this.handleLikes}> 💖</p>
        <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title}/>
        <p>{this.props.description}</p>
        <Button>Bootstrap button</Button>
        <button>Plain html button</button>
      </article>
    )
  }
}

export default HornedBeast;