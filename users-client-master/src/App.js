import React from 'react';
import './App.css';

class App extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      errorMessage : "",
      apiUrl : "http://localhost:8080/api"
    }
  }

  handleLogin = ( event ) => {
    event.preventDefault();
    
    const userEmail = event.currentTarget.userEmail.value;
    const userPassword = event.currentTarget.userPassword.value;

    const data = {
      email : userEmail,
      password : userPassword
    };

    const url = `${this.state.apiUrl}/users/login`;
    
    const settings = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify( data )
    };

    fetch( url, settings )
      .then( response => {
        if( response.ok ){
          return response.json();
        }
        throw new Error( response.statusText );
      })
      .then( responseJSON => {
        localStorage.setItem( 'token', responseJSON.token );
        this.props.history.push( '/home-page' );
      })
      .catch( err => {
        this.setState({
          errorMessage : err.message
        });
      });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleLogin}>
          <div>
            <label htmlFor="userEmail">
              Email : 
            </label>
            <input type="text" name="userEmail" id="userEmail" />
          </div>
          <div>
            <label htmlFor="userPassword">
              Password : 
            </label>
            <input type="password" name="userPassword" id="userPassword" />
          </div>
          <button type="submit">
            Login
          </button>
        </form>
        <p>
          {this.state.errorMessage}
        </p>
      </div>
    )
  }

}

export default App;
