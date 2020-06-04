import React from 'react';

class Home extends React.Component{

    constructor ( props ){
        super ( props );
        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            apiUrl : "http://localhost:8080/api"
        }
    }

    componentDidMount(){

        const url = `${this.state.apiUrl}/validate-user`;
        const settings = {
            method : 'GET',
            headers : {
                sessiontoken : localStorage.getItem( 'token' )
            }
        };

        fetch( url, settings )
            .then( response => {
                if( response.ok ){
                    return response.json();
                }

                throw new Error( response.statusText );
            })
            .then( responseJSON => {
                this.setState({
                    firstName : responseJSON.firstName,
                    lastName : responseJSON.lastName,
                    email : responseJSON.email
                })
            })
            .catch( err => {
                this.props.history.push( '/' );
            });
    }
    
    render(){
        return(
            <div>
                <h1>
                    This is the home page
                </h1>
                <p>
                    Welcome back {this.state.firstName} {this.state.lastName}
                </p>
            </div>
        )
    }
}

export default Home;