import React, {Component} from 'react';

let client_id = "ca_DAOZ88GVYbv2TohpCHznZ5ip0FqzsIP7";
let redirect_uri = "https://diamot-stripetest.azurewebsites.net";

let href = "https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_DAOZ88GVYbv2TohpCHznZ5ip0FqzsIP7&scope=read_write";

class App extends Component {

    render() {

        return (
            <div className="container">

                <center>
                    <br/> <br/> <br/> <br/>
                    <h1 style={{color: '#369FDB'}}>Stripe payment</h1>
                    <a href="https://stripe.com/docs/testing" style={{textDecoration: 'none'}} target="_blank"><h5
                        style={{color: 'skyBlue'}}>testing...</h5></a>
                    <br/>
                    <br/>

                    <a href={href} target="_blank">
                        <img src="http://localhost:8080/image/blue-on-light.png" alt="stripe"/>


                    </a>
                </center>
            </div>


        );
    }
}


export default App;
