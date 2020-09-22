import React from 'react';
import './App.css';
import axios from 'axios'

import {BrowserRouter} from 'react-router-dom'
const request=require('request');

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      password:"",
      loginemail:"",
      loginpassword:""
    }
  }
  componentDidMount(){
  //   const urll="https://backendpart.herokuapp.com/user";
  //   request({url:urll,json:true},(error,response)=>{
  //     const b=response.body;
  //     this.setState({det:b});

  //   })
    }
    onchangename=(e)=>{
     
    

    }
    onchangeemail=(e)=>{
      this.setState({email:e.target.value})

    }
    onchangeloginemail=(e)=>{
      this.setState({loginemail:e.target.value})

    }
    onchangeloginpassword=(e)=>{
      this.setState({loginpassword:e.target.value})
    }
    onchangepassword=(e)=>{
      this.setState({password:e.target.value})
    }

    buttonclicked=(e)=>{
      e.preventDefault();
      var body = {
        name:this.state.name,
        email: this.state.email,
        password:this.state.password
    }
    console.log(body.name)
    
    axios({
        method: 'post',
        url: 'https://tempback.herokuapp.com/user/add',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

    }
    
    loginclicked=(e)=>{
      e.preventDefault();
      var url="https://tempback.herokuapp.com/user/getone/"
      var em=this.state.loginemail;
       url=url+em
      axios.get(url)
      .then((response)=>{console.log(response.data)
        console.log(this.state.loginpassword)
        if(response.data=={})
        {
          console.log("not registered")
        }
        else if(response.data===this.state.loginpassword)
        {
          alert("success")
        }
        else if(  response.data!==this.state.loginpassword)
        {
          alert("not success")
        }
      })

    }

  render(){
    return(
      <div>
        
          <input type='text' name="email" placeholder="enter email"  onChange={this.onchangeemail}/>
          <input type="password" name="password" placeholder="enter password" onChange={this.onchangepassword} />
          <input type="text" name="name" placeholder="enter name" onChange={this.onchangename} />
          <button type="submit" onClick={this.buttonclicked}>Click </button>
          
          <br/><br/><br/>
          <input type="text" name="loginemail" onChange={this.onchangeloginemail} />
          <input type="password" name="loginpassword" onChange={this.onchangeloginpassword} />
          <button type="submit" onClick={this.loginclicked}>login </button>
          <p>here{this.state.loginemail}</p>





          

      
      </div>
    )
  }
}

export default App;
