import React, {Component} from 'react';
import './styles.css';
import PlayerPage from './PlayerPage'
import PlayerID from './PlayerID'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
      submitted: false,
      player: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
    

  handleChange(id){
    this.setState({
      ...this.state,
      input: id
    })
  }

  handleClick(){
    fetch(`http://localhost:5000/?id=${this.state.input}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...this.state,
          submitted: true,
          player: data
        })
      })
  }

  render(){
    if(this.state.submitted === false){
      return(
        <PlayerID change={this.handleChange} click={this.handleClick}/>
      )
    }else{
      return(
        <PlayerPage player={this.state.player} />
      )
    }
    
  }
}




export default App;

