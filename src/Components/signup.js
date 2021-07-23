import React, { createRef, Component } from 'react'

// const Signup = () => { //uncontrolled

//     const name = useRef("");
//     const phone = useRef("");


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Submit", name.current.value, phone.current.value);
//     }


//     return ( <form onSubmit={handleSubmit} >
//         <label for="name">Name</label>
//         <input type="text" name="name" id="name" ref={name} />
//         <br/>
//         <label for="phone">Phone</label>
//         <input type="text" name="phone"  id="phone" ref={phone}/>
//         <br/>
//         <input type="submit"/>
//     </form> );
// }
 
// export default Signup;



class Signup extends Component { //uncontrolled class based
    constructor(props) {
        super(props);
        this.name = createRef()
        this.phone = createRef()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", this.name.current.value, this.phone.current.value);
    }



    render() { 
        return ( <form onSubmit={this.handleSubmit} >
            <label for="name">Name</label>
            <input type="text" name="name" id="name" ref={this.name} />
            <br/>
            <label for="phone">Phone</label>
            <input type="text" name="phone"  id="phone" ref={this.phone}/>
            <br/>
            <input type="submit"/>
        </form> );
    }
}
 
export default Signup;