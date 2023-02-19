import axios from 'axios'

const CLIENT_API_BASE_URL ="http://localhost:8080/api/v1/clients";
const CLIENT_LOGIN_API_BASE_URL ="http://localhost:8080/api/v1/login";
class ClientService{

    getClients(){
        return axios.get(CLIENT_API_BASE_URL);
    }

      
    createClient(client){
    return axios.post(CLIENT_API_BASE_URL,client);
   }

   loginClient(client){
    return axios.post(CLIENT_LOGIN_API_BASE_URL,client);
   }
}

export default new ClientService();