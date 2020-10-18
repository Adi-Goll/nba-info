import React, {Component} from 'react';
import './styles.css';
import PlayerPage from './PlayerPage'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
      submitted: false
    }
  }

  handleChange(id){
    this.setState({
      ...this.state,
      input: id
    })
  }

  handleClick(){
    console.log(this.state.input)
    this.setState({
      ...this.state,
      submitted: true
    })
  }

  render(){
    if(this.state.submitted === false){
      return(
        <div>
          <input type="text" className="user-input" onChange={(e) => this.handleChange(e.target.value) }></input>
          <button onClick={() =>this.handleClick()} className="submit-button">Submit</button>
        </div>
      )
    }else{
      return(
        <PlayerPage />
      )
    }
    
  }
}




export default App;

