import React, {Component} from 'react';
import './styles.css';

class PlayerID extends Component{
    
    render(){
        return(
            <div>
                <input type="text" className="user-input" onChange= {(e) => this.props.change(e.target.value) }></input>
                <button onClick={() =>this.props.click()} className="submit-button">Submit</button>
            </div>
        )
    }
}

export default PlayerID