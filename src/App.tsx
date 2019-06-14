import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import LMSHeader  from './application/view/LMSHeader';
import LMSFooter  from './application/view/LMSFooter';
import Home from './application/view/Home';
import AccessAndAuthorization from './login/view/AccessAndAuthorization';



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
        
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }

	public onLoginSuccess(username: string, imgUrl: string) {
        this.setState({
            username,
            imgUrl,
            loggedIn: true
        });
    }

    public render() {
        return (
            <div className="App">
                <LMSHeader username={this.state.username} imgUrl={this.state.imgUrl}/>
                {!this.state.loggedIn && 
                <AccessAndAuthorization name="hello" loggedIn={this.onLoginSuccess} />
                }
                {this.state.loggedIn ? <Redirect to="/home" />: null}
                <Switch>
                    <Route path='/home' exact component={Home}/>
                </Switch>
                <LMSFooter/>
            </div>
        );
    }

    

}

export default App;
