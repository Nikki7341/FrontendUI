import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';

const LandingPage = () => {
      const [toggle, setToggle] = useState("login");

      const handleClick = () => {
            if(toggle) {
                  setToggle(false)
            } else {
                  setToggle(true)
            }
      }
      return (
            <div>
            <div className="row">
                  <div className="col-md-6">
                        <h1>Image</h1>
                  </div>
                  <div className="col-md-6">
                  <div  className="mainCard p-5">
                  <div className="row">
                        <div className="col-md-3">
                        <button className="btn1" onClick={() => handleClick()}><h2>Login</h2></button> 
                        <hr className="upperDivider"/>
                        </div>
                        <div className="col-md-4">
                        <button className="btn1" onClick={() => handleClick()}><h2>Sign up</h2></button>   
                        <hr className="upperDivider"/>   
                        </div>
                  </div>  
                  <div className="row">
                        
                         <SignUp />
                        
                  </div>  
                  </div>
                  </div>
            </div>
            </div>
      )
}

export default LandingPage
