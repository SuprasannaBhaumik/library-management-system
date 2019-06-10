import React from 'react';
import './App.css';
import Login from './login/view/Login';
import GoogleLogin from 'react-google-login';
import LMSHeader  from './application/view/LMSHeader';
import LMSFooter  from './application/view/LMSFooter';

interface InternalState {
    username: string;
}
    
interface Props {

}

class App extends React.Component<Props, InternalState> {
        
    

    constructor(props: Props) {
        super(props);
        
        this.state ={
            username: ''
        }
        
        this.responseGoogle = this.responseGoogle.bind(this);
    }



    public render() {
        return (
            <div className="App">
                <LMSHeader username={this.state.username}/>
                {this.state.username === '' && 
                <React.Fragment>
                    <Login/>
                    <GoogleLogin
                        clientId="93293366109-n9btq5pno3b2gj2ofoojb6g14sfh4a8c.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </React.Fragment>
                }
                <div className="content">
                    <span>Dummy content</span>
                </div>
                <LMSFooter/>
            </div>
        );
    }

    public responseGoogle(response: any){
        
        console.log(response);

        this.setState({
            username: response.w3.ofa
        })
    }

}

export default App;
