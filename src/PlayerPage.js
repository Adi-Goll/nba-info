import React, {Component} from 'react';
import './styles.css';



class PlayerPage extends Component{
    exObj = {
        name: 'LeBron James',
        jerseyNum: '23'
    }

    render(){
        return(
            <div>
                <div className="player-info">
                    <p>Name: {this.exObj.name}</p> 
                    <p>Jersey number: {this.exObj.jerseyNum}</p>
                </div>
            </div>
        )
    }

}


export default PlayerPage;