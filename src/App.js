import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory,Switch } from 'react-router'
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import Eux from "./hoc/Eux/Eux";

let client_id = "ca_DAOZ88GVYbv2TohpCHznZ5ip0FqzsIP7";
let redirect_uri = "https://diamot-stripetest.azurewebsites.net";

let href = "https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_D1d33vDFNoQPpaPSNY0b8cwN4RA1BYnl&scope=read_write";


const stripePay = asyncComponent(() => {
    return import ('./Connect/Connect');
});


class App extends Component {
    render() {

        return (
            <div>
                <center>
                    <br/> <br/> <br/> <br/>
                    <h1 style={{color: '#369FDB'}}>Stripe payment</h1>
                    <a href="https://stripe.com/docs/testing" style={{textDecoration: 'none'}} target="_blank"><h5
                        style={{color: 'skyBlue'}}>testing...</h5></a>
                    <br/>
                    <br/>

                    <a href={href} target="_blank">
                        <img src="/image/blue-on-light.png" alt="stripe"/>
                    </a>
                </center>

                <Switch>
                    <Route path="/connect" component={stripePay}/>
                </Switch>

            </div>

        );
    }
}


export default App;
