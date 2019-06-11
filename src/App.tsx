import React from 'react';

import './App.css';

import Login from './login/view/Login';
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

import LMSHeader  from './application/view/LMSHeader';
import LMSFooter  from './application/view/LMSFooter';
import Home from './application/view/Home';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Redirect, Route, Switch } from 'react-router-dom';

interface InternalState {
    username: string;
    imgUrl: string;
    loggedIn: boolean;
}
    
interface Props{
    // history: any;
}

class App extends React.Component<Props, InternalState> {
        
    

    constructor(props: Props) {
        super(props);
        
        this.state ={
            username: '',
            imgUrl: '',
            loggedIn: false
        }
        
        this.responseGoogle = this.responseGoogle.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
        this.failureGoogle = this.failureGoogle.bind(this);
        this.navigateToHome = this.navigateToHome.bind(this);
    }



    public render() {
        return (
            <div className="App">
                <LMSHeader username={this.state.username} imgUrl={this.state.imgUrl}/>
                {this.state.username === '' && 
                <div className="encloser">
                    <Login/>
                    <hr/>
                    <Form.Text className="text-muted">
                        Alternatively login via below channels.
                    </Form.Text>
                    <br/>
                    <Row>
                        <Col>
                            <GoogleLogin
                                clientId="93293366109-n9btq5pno3b2gj2ofoojb6g14sfh4a8c.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.failureGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Col>
                        {/*<Col>
                            <FacebookLogin
                                appId=""
                                autoLoad={true}
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                icon="fa-facebook"
                            />    
                        </Col>*/}
                    </Row>

                </div>
                }
                {this.state.loggedIn ? <Redirect to="/home" />: null}
                <Switch>
                    <Route path='/home' exact component={Home}/>
                </Switch>
                <LMSFooter/>
            </div>
        );
    }

    public responseGoogle(response: any){
        this.setState({
            username: response.profileObj.givenName,
            imgUrl: response.profileObj.imageUrl,
            loggedIn: true
        });
        // , () => this.navigateToHome()
    }

    public responseFacebook(response: any) {
        this.setState({
            username: response.profileObj.givenName,
            imgUrl: ''
        });
    }

    public failureGoogle(response: any){
        // login failed
    }

    public navigateToHome() {
        return <Redirect to="/home" />
    }

}

export default App;
