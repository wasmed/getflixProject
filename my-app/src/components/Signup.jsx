import React, { Component } from 'react';
import ClientService from '../services/ClientService';
import {Navigate, useNavigate} from 'react-router-dom';
import Login from './Login';
import ListClients from './ListClients';

class Signup extends Component {
   
      constructor(props){
        super(props)


        this.state={
              formSubmitted:false ,
              nom:'',
              prenom: '',
              mail:'',
              password:''

        }
        this.saveClient = this.saveClient.bind(this);
        this.chageEmailHandler = this.chageEmailHandler.bind(this);
        this.chageLastNameHandler= this.chageLastNameHandler.bind(this);
        this.chageFirstNameHandler= this.chageFirstNameHandler.bind(this);
      }

      saveClient= (c)=>{
       // const [formSubmitted, setFormSubmitted] = useState(false);
        c.preventDefault();
        let clients = {nom: this.state.nom, prenom: this.state.prenom, mail: this.state.mail ,password: this.state.password};
        console.log('clients => '+JSON.stringify(clients));
        console.log(clients);
        
        ClientService.createClient(clients);
       this.setState({ formSubmitted: true });
        
       
      }

   

   chageFirstNameHandler=(event)=>{
            this.setState({nom:event.target.value});
   }
   chageLastNameHandler=(event)=>{
    this.setState({prenom:event.target.value});
}

chageEmailHandler=(event)=>{
    this.setState({mail:event.target.value});

}
 chagePaaswordHandler=(event)=>{
         this.setState({password:event.target.value});
 }


    render() {
        return (

           

            <div>
                    {
                        this.state.formSubmitted ?(<ListClients/>) : (

                       
                  
            <div className="container">
                <h1 className="title1">Manage Clients</h1>
                <hr />
                <h2 className="title2">New Client</h2>
    
                <form>
                    <div className="mb-4 col-4">
                        <label >First Name</label>
                        <input type="text" name='nom' placeholder=" First Name" className="form-control" 
                            value={this.state.nom} onChange={this.chageFirstNameHandler}/>

                        <span className="text-danger" ></span>
                    </div>
                    <div className="mb-4 col-4">
                        <label >Last Name</label>
                        <input type="text" name='prenom' placeholder=" Last Name" className="form-control" value={this.state.prenom} onChange={this.chageLastNameHandler}/>
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-4 col-4">
                        <label >E mail</label>
                        <input type="e-mail" name='mail' placeholder=" e mail adress" className="form-control" value={this.state.mail} onChange={this.chageEmailHandler}/>
                        <span className="text-danger" ></span>
                    </div>
    
                    <div className="mb-4 col-4">
                        <label >Password</label>
                        <input type="password" name='password' placeholder="password" className="form-control" value={this.state.password} onChange={this.chagePaaswordHandler}/>
                        <span className="text-danger" ></span>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary col-2" onClick={this.saveClient}>Save</button>
                        <a  className="btn btn-danger col-2">Cancel</a>
                    </div>
                </form>
                <hr />
                <div  className="alert-danger"/>
            </div>
       
       ) }       
    </div>
 

        );
    }
}

export default Signup;