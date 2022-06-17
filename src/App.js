import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from 'react-bootstrap/Modal';
import data from './data.json';
import './App.css';
import React from 'react';
//import ListGroup from 'react-bootstrap/ListGroup'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      heart: '',
      showModal: false,
      selectedBeast: '',
      selectedBeastImg: '',
      beastDescription: '',
      sort:'',
      sorted: data
    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleOnShow = (title, image_url, description) => {
    this.setState({
      showModal: true,
      selectedBeast: title,
      selectedBeastImg: image_url,
      beastDescription: description
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let selected = event.target.selected.value;
    this.setState({
      sort: selected
    });
  };

  handleSelect = (event) => {
    let selected = event.target.value;  
    console.log(selected);
    if (selected === "1") {
      let oneHorn = data.filter(data => data.horns === 1);
      this.setState({
        sorted: oneHorn
      })
    } else if (selected === "2"){
      let twoHorns = data.filter(data => data.horns === 2);
      this.setState({
        sorted:twoHorns
      })
    } else if (selected === "3"){
      let threeHorns = data.filter(data => data.horns === 3);
      this.setState({
        sorted: threeHorns
      })
    } else if (selected === "100"){
      let hundredHorns = data.filter(data => data.horns === 100);
      this.setState({
        sorted: hundredHorns
    })
    } else if (selected === "All"){
      this.setState({
        sorted: data
      })
    }
  }

  render(){
    return (
      <>
        <Header
        />
        <Main
        data = {this.state.sorted}
        handleOnShow={this.handleOnShow}
        />
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Horns Selected</legend>
            <select name ="selected" onChange={this.handleSelect}>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">100</option>
              <option value="All">All</option>
            </select>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        <Footer/>
        <Modal show={this.state.showModal}
        onHide={this.handleOnHide} style = {{width: '100%'}}>
          <Modal.Header closeButton>
          <Modal.Title>{this.state.selectedBeast}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className = 'img-fluid' src={this.state.selectedBeastImg} alt={this.state.selectedBeast}/>
          <p>{this.state.beastDescription}</p>
        </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;
