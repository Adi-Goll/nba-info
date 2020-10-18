import React, {Component} from 'react';
import './styles.css';

class PlayerPage extends Component{
    render(){
        return(
            <div>
                <div className="player-info">
                    <p>Name: {this.props.player.name}</p> 
                    <p>Jersey number: {this.props.player.jerseyNumber}</p>
                </div>
            </div>
        )
    }

}


export default PlayerPage;