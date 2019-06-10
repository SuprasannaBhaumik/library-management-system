import React from 'react';
import Button from 'react-bootstrap/Button';

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
                <div>
                    <div>
                        <div>Username:</div>
                        <div><input type="text" value={this.state.username} onChange={this.handleChange}/></div>
                    </div>
                    <div>
                        <div>Password:</div>
                        <div><input type="password" value={this.state.password} onChange={this.handlePassword}/></div>
                    </div>
                    <Button variant="outline-primary" disabled={this.state.password === '' && true}>
                        Submit
                    </Button>
                </div>
            </React.Fragment>
        );
    }

    public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            username: e.target.value
        });
    }

    public handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: e.target.value
        });
    }

}
export default Login;