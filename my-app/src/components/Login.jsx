import React, { Component } from 'react';
import ClientService from '../services/ClientService';
import ListClients from './ListClients';
class Login extends Component {

    constructor(props){
        super(props)


        this.state={
              formSubmitted:false ,
              mail:'',
              password:''

        }
     
      }


      loginClient= (c)=>{
        c.preventDefault();
        let clients = { mail: this.state.mail ,password: this.state.password};
        console.log('clients => '+JSON.stringify(clients));
        ClientService.loginClient(clients);
        this.setState({ formSubmitted: true });
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
               <h1 className="title1">Login Client</h1>
               <hr />
   
               <form>
                  
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
                       <button type="submit" className="btn btn-primary col-2" onClick={this.loginClient}>Connecter</button>
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





export default Login;