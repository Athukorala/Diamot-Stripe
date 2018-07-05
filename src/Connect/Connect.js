import React, {Component} from 'react';
import axiosStripe from "../axios/axios-stripe";
import axiosUser from "../axios/axios-user";

class Connect extends Component {

    componentDidMount() {
        console.log("connecting....");

        const obj = {
            client_secret: 'sk_live_Q4SmeEtJhNW1yBLItPmjEbiM',
            grant_type: 'authorization_code',
            code: ''

        };

        axiosStripe.post(obj)
            .then(response => {
                if (response.data) {
                    axiosUser.post(response.data)
                        .then(response => {
                        })

                        .catch(error => {
                        });
                }
            })

            .catch(error => {

                console.log("error occured : " + error);

            });

    }


    render() {
        return (
            <div>
                <h5>Connecting...</h5>
            </div>
        )
    }

}

export default Connect;