import React, { Component } from 'react'


 class Time extends Component {
     state = {         
         date: new Date(),
         hour: ''
     };
 
    //    getHour = () => {
    //     const date = new Date();
    //     const hour = date.getHours()
    //     this.setState({
    //        hour
    //     });
    //    }

    getTime = () =>{
        const date = new Date()
        setInterval(
            () =>{
                this.setState({
                    date: new Date()   
                   })
            }, 1000
        )
    }



    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                {this.getTime()}
            </div>
        )
    }
}

export default Time;
