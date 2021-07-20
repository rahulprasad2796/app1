import axios from 'axios';
import "./card.css"
import React, { useEffect, useState } from 'react'


export const Card = (props) => {
    const {firstName, lastName, email, phone, addProduct} = props;

    return ( <div>
      <p>Name: {firstName} {lastName}</p>
      <p>Email: {email} </p>
      <p>Phone: {phone}</p>
      <button onClick={() => {addProduct(props)}}>Submit</button>
      {/* here we are sending whole props through addProduct, the name or var addproduct will be same through out */}
    </div> );
}

export const Cards = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // axios
        // .get("https://60eedf19eb4c0a0017bf468a.mockapi.io/data")
        // .then((res) => {
        //     console.log("componentDidMout");
        //     setProducts(res.data);
        //     setLoader(false);
        // });
        console.log("componentDidMout");
    }, [])

    //without installing axios
    useEffect(() => {
        fetch("https://60eedf19eb4c0a0017bf468a.mockapi.io/data", {
            method: "GET"
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }, [])


    //async await
    const getCards = async() => {
        const response = await axios
        .get("https://60eedf19eb4c0a0017bf468a.mockapi.io/data")
        .then((res) => {
            console.log(res);
            return res.data;
        });
        console.log(response);
        setProducts(response);
        setLoader(false);
    }




    useEffect(() => {
        console.log("componentDidMount and ComponentDidUpdate");
    })

    useEffect(() => {
        return () => {
            console.log("componentWillUnmount")
        }
    }, [])

    const plusCount = () => {
        const updateCount = count + 1;
        updateCount <= 10 && setCount(count + 1);
    }

    const minusCount = () => {
        const updateCount = count - 1;
        updateCount >= 0 && setCount(count - 1);
    }

    const handleProduct = (product) => {
        // product here is props send from card through add product
        console.log(product);
        const updateCart = [...cart, product]
        setCart(updateCart);
    }


    return ( <div>
        <button onClick={plusCount}>Plus+</button>
        <p>{count}</p>
        <button onClick={minusCount}>Minus-</button>
        <h1>Cards - {cart.length}</h1>
        <button onClick={getCards}>Show Cards</button>
        {loader ? (<h2>Loading...</h2>) : (products.map((v, i) => <Card {...v} key={i} addProduct={handleProduct} />)) } 
        {/* here we receive all the props sent from addProduct */}
        {/* {addproduct is a prop and we write function for it as handleProduct} */}
    </div>);
}
 