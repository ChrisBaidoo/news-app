import React, { Component } from 'react'


 class Time extends Component {
     state = {         
         date: new Date(),
         hour: '',
         user: 'Christian'
     };
 
    

    getTime = () =>{
        const date = new Date()
        const hour = date.getHours()
        setInterval(
            () =>{
                this.setState({
                    date: new Date(), 
                    hour: hour
                   })
            }, 100000
        )
    }



    render() {
        console.log(this.state.hour)
        return (
            <div>
             <h3 className="App-title"> {(this.state.hour < 12) ?
              `Good Morning, ${this.state.user}`: (this.state.hour > 12) && (this.state.hour < 18) ?
              `Good Afternoon, ${this.state.user}` : `Good Evening, ${this.state.user}` } </h3>   

             <div> <h2>{this.state.date.toLocaleTimeString()}</h2></div>

                {this.getTime()}

            </div>
        )
    }
}

export default Time;
