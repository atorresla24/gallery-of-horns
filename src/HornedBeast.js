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

  handleHeadLineClick = () => {
    this.props.handleOnShow(this.props.title, this.props.image_url, this.props.description);
  }

  render(){
    return(
      <article>
        <id>{this.props._id} </id>
        <p>{this.state.likes} Likes </p> 
        <p onClick={this.handleLikes}> 💖 </p>
        <h2 onClick={this.handleHeadLineClick}>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title}/>
        <p>{this.props.description}</p>
        <Button>Bootstrap button</Button>
      </article>
    )
  }
}

export default HornedBeast;