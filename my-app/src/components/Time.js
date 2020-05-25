import React, { Component } from 'react'
import NavBar from './NavBar';



class Time extends Component {
     state = {         
         date: new Date(),
         hour: '',
         user: 'Christian'
     }

 
    

   

    //  const renderTime =  () =>  {
    //     const date = new Date();
    //     const hour = date.getHours();
    //     const min = date.getMinutes();
    //     const sec = date.getSeconds();
    //     console.log(hour, min, sec)
    //  }
      






    render() {

        return (

            <div>
                <NavBar/>
             <h3 className="App-title"> {(this.state.hour < 12) ?
              `Good Morning, ${this.state.user}`: (this.state.hour > 12) && (this.state.hour < 18) ?
              `Good Afternoon, ${this.state.user}` : `Good Evening, ${this.state.user}` } </h3>   

             <div> <h2>{this.state.date.toLocaleTimeString()}</h2></div>

                {/* {this.getTime()} */}

            </div>
        )

    }

}
            

                //   addZero = (i) => {
    //     if (i < 10) {
    //       i = "0" + i;
    //     }
    //     return i;
    //   }
    
      
    //   setInterval(renderTime, 1000);
        
    



export default Time;



   
