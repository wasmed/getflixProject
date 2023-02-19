
import React, { Component } from 'react';
import ClientService from '../services/ClientService';
import {Link} from 'react-router-dom';

class ListClients extends Component {

      constructor(props){
        super(props)


        this.state={
              clients: []
        }
       // this.addClient=this.addClient.bind(this);
      }



   componentDidMount(){
        ClientService.getClients().then((res)=>{
             this.setState({clients: res.data});
           
        });
       
   }

    render() {
        return (
            <div>
                  <h2 className='text-center'> clients</h2>
                <div className="row">
                <Link  to = '/add-client' className="btn btn-primary"  >  add client   </Link>
                 </div>
    <div className="row">
        <table className="table table-striped table-bordered">
          <thead >
            <tr>
              <th >
                #
              </th>
              <th >
              First Name
              </th>
              <th  >
                Last Name
              </th>
              <th  >
               E-mail
              </th>
              <th  >
              Type Abonnement
              </th>
            </tr>
          </thead>
          <tbody>

          {
                            this.state.clients.map(
                                client =>
                                    <tr >
                                       <td >{client.id} </td>
                                       <td  >{client.nom}</td>
                                       <td  >{client.prenom}</td>
                                       <td  >{client.mail}</td>
                                       <td  >{client.password}</td>
                                    </tr>
                            )
                        }
           
          </tbody>
        </table>
      </div>
    </div>
 

        );
    }
}

export default ListClients;