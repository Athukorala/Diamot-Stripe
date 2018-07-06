import React, {Component} from 'react';
import axiosStripe from "../axios/axios-stripe";
import querySting from 'query-string';

class Connect extends Component {

    state = {
        code: '',
        backendData:''
    };

    componentDidMount() {
        
        // get querystring data 

        const parsed = querySting.parse(location.search);

        console.log("connecting....");

        const obj = {            
            code: parsed.code
        };

        this.setState({
            code:parsed.code
        });

        console.log("code: "+parsed.code);

        // send data to backend 
        
        axiosStripe.get(`Connect?code=` + parsed.code)
            .then(response => {
                if (response.data) {

                    this.setState({
                        backendData:response.data
                    });

                    // this.props.history.push('/');
                    // window.location.reload();

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
                <br/>
                <h6>Code : {this.state.code}</h6>
                <h6>Backend Data : {this.state.backendData}</h6>
            </div>
        )
    }

}

export default Connect;