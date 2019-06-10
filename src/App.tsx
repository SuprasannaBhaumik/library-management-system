import React from 'react';
import './App.css';

import Login from './login/view/Login';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import LMSHeader  from './application/view/LMSHeader';
import LMSFooter  from './application/view/LMSFooter';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        this.responseFacebook = this.responseFacebook.bind(this);
        this.failureGoogle = this.failureGoogle.bind(this);
    }



    public render() {
        return (
            <div className="App">
                <LMSHeader username={this.state.username}/>
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
                <div className="content">
                    <span>Dummy content</span>
                </div>
                <LMSFooter/>
            </div>
        );
    }

    public responseGoogle(response: any){
        this.setState({
            username: response.w3.ofa
        });
    }

    public responseFacebook(response: any) {
        this.setState({
            username: response.w3.ofa
        });
    }

    public failureGoogle(response: any){
        // login failed
    }

}

export default App;
