import React from 'react';

class RegisterForm extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col">
                <label>First Name: <input type="text" name="firstName" id=""/></label>                
                <label>Last Name: <input type="text" name="lastName" id=""/></label>
                <label>Email Address: <input type="text" name="email" id=""/></label>
                <label>Username: <input type="text" name="username" id=""/></label>
                <label>Password: <input type="pass" name="password" id=""/></label>
                <label>Confirm Password: <input type="pass" name="confPassword" id=""/></label>                    
                </div>
            </div>            
        );password
    }
}

export default RegisterForm;