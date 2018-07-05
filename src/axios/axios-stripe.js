import axios from 'axios';


const instance=axios.create({
    baseURL:'https://connect.stripe.com/oauth/token/'

})

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
