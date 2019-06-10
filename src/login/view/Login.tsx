import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


interface InternalState {
    username: string;
    password: string;
}

interface Props {

}

class Login extends React.Component<Props, InternalState> {


    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-row">
                <Form>
                    <Form.Row>
                        <Form.Group controlId="formUsername">
                            <div className="d-flex flex-row">
                                <div className="p-2 ">
                                    <Form.Label>Username</Form.Label>
                                </div>
                                <div className="p-2 ">
                                    <Form.Control as="input" placeholder="Enter your username" onChange={ this.handleChange } value={this.state.username}/>
                                </div>
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formBasicPassword">
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-2">
                                    <Form.Label>Password</Form.Label>
                                </div>
                                <div className="p-2">
                                    <Form.Control type="password" placeholder="Password" onChange={this.handlePassword} value={this.state.password}/>
                                </div>
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Button variant="primary" type="submit" disabled={this.state.password === '' && true}>
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
                </div>
            </React.Fragment>
        );
    }

    public handleChange(event: any) {
        this.setState({
            username: event.target.value
        });
    }

    public handlePassword(event: any) {
        this.setState({
            password: event.target.value
        });
    }

}
export default Login;