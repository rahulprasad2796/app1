import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Person = (props) => {
    //to se changing effect the user ust go back to home page otherwise the product wont load
    // console.log(props.match.params.id); 
    console.log(props); // gives the pathname and firstname props sent
    const {id} = useParams();
    // const id = props.match.params.id;
    const [person, setPerson] = useState({name: "", avatar: ""});
    const {name, avatar} = person; 
    const url = "https://60eedf19eb4c0a0017bf468a.mockapi.io/data/";

    //use before return
    useEffect(() => {
        axios(url + id)
        .then(res => {
            console.log(res);
            setPerson(res.data)
        })
    }, [])



    return ( <div>
        <h1>Person- {id}</h1>
        <h2>Name: {name}</h2>
        <img src={avatar} alt={id + name} />
    </div> );
}
 
export default Person;