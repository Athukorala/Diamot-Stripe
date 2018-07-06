import axios from 'axios';


const instance=axios.create({
    baseURL:'/Stripe/Connect/'

})

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
