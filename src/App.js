import React, {Component} from 'react';
import './styles.css';
import PlayerPage from './PlayerPage'
import PlayerID from './PlayerID'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
      submitted: false
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
    this.setState({
      ...this.state,
      submitted: true
    })
  }

  render(){
    if(this.state.submitted === false){
      return(
        <PlayerID change={this.handleChange} click={this.handleClick}/>
      )
    }else{
      return(
        <PlayerPage />
      )
    }
    
  }
}




export default App;

