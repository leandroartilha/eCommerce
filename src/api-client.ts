import axios from "axios";

const apiClient =  axios.create({
    baseURL: 'https://api.rawg.io/api' ,
    //baseURL: 'https://api.themoviedb.org/3' ,
    params:{
        key: '5b6837c2201244f4afe33a731ff6c2a9',
        //key: 'ec6e1a7fe2c70e6755f2044bc0fed654'
    }
})

export default apiClient;