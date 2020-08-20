import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
const request=require('request');

class App extends React.Component{
  constructor(){
    super();
    this.state={
      det:[]
    }
  }
  componentDidMount(){
    const url="https://backendpart.herokuapp.com/user";
    request({url:url,json:true},(error,response)=>{
      const b=response.body;
      this.setState({det:b});

    })
   }

  render(){
    return(
      <div style={{background:"aquamarine"}}>
        <h1 style={{textAlign:"center",fontSize:"45px",color:"darkgoldenrod"}}>Welcome to Movies City</h1>
        {
          this.state.det.map((ele)=>{
            return(
              <div key={ele._id}>
              <p style={{fontSize:"37px",color:"brown",fontWeight:"900",textDecoration:"underline"}}>{ele.name}</p>
              <img src={ele.img} height="300px" width="300px" alt="URL given in the database is dead"></img>
            <p style={{color:"darkmagenta",fontSize:"25px"}}>{ele.summary}</p>
              </div>
            )
          })
        }

      </div>
    )
  }
}

export default App;
