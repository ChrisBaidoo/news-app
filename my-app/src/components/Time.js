import React, { Component } from 'react'
import NavBar from './NavBar';



class Time extends Component {

    constructor(){
        super()
        this.state = {
            time: new Date(),
            user: 'Christian',
            hour: 0
        }
    }
    
    currentTime(){
        this.setState({
            time: new Date(),
            hour: this.state.time.getHours()
        })
    }

    componentWillMount(){
        setInterval(()=>this.currentTime(), 1000)
    }

    render() {

        return (

            <div>
                <NavBar/>
             <h3 className="App-title"> {(this.state.hour < 12) ?
              `Good Morning, ${this.state.user}`: (this.state.hour > 12) && (this.state.hour < 18) ?
              `Good Afternoon, ${this.state.user}` : `Good Evening, ${this.state.user}` } </h3>   

             <div> <h2>{this.state.time.toLocaleTimeString()}</h2></div>


            </div>
        )

    }

}

export default Time;



   
