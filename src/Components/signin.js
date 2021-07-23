import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const Signin = () => { //controlled based on state update , component gets rerendered

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [redirect, setRedirect] = useState(false);
    const user ={
        name: "Rahul",
        phone: 7024623465
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === user.name && phone == user.phone) {
            alert("logged in"); 
            setRedirect(true);
            console.log("Submit");
        }
    }

    return ( <form onSubmit={handleSubmit} >
        {redirect && <Redirect to="/" />}
        <label for="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value.toUpperCase())} />
        <br/>
        <label for="phone">Phone</label>
        <input type="text" name="phone"  id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br/>
        <input type="submit"/>
    </form> );
}
 
export default Signin;