import { Alert } from 'bootstrap';
import React, { useState } from 'react'
import Home from './Home';





function Registration() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    
    const [phone, setPhone] = useState("");

    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);

    const [login, setLogin] = useState(true);

function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone){
        setFlag(true);
    }else{
        setFlag(false);
        localStorage.setItem("Email", JSON.stringify(email));
        localStorage.setItem("Password", JSON.stringify(password));

        console.login("Saved In Local Storage");
        setLogin(!login);
    }

}

function handleClick(){
    setLogin(!login);
}


  return (
    <div>

        {login ? (


        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='form-group'>
                <label>Username:</label>
                <input
                type='text'
                className='form-control'
                placeholder='Enter Username'
                onChange={(event) => setName (event.target.value)}
                />
                
        </div>
            <div className='form-group'>
                <label>Email:</label>
                <input
                type='email'
                className='form-control'
                placeholder='Enter Email'
                onChange={(event) => setEmail (event.target.value)}
                />

        <div className='form-group'>
                <label>Phone:</label>
                <input
                type='phone'
                className='form-control'
                placeholder='Enter Number'
                onChange={(event) => setPhone (event.target.value)}
                />

                
            </div>

            <div className='form-group'>
                <label>Password:</label>
                <input
                type='password'
                className='form-control'
                placeholder='Enter Password'
                onChange={(event) => setPassword (event.target.value)}
                />

                
            </div>

                
            </div>
            <button type="submit" className='btn btn-danger'>Register</button>

            <p onClick={handleClick}>Already registered {""} login?</p>

            {flag && (
                <Alert color="primary"  variant='danger'>   
                Please Fill every Field
                </Alert>
            )}


        </form>

):(

    <Home/>
)}

    </div>
  )
}

export default Registration;