import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import LMSHeader  from './application/view/LMSHeader';
import LMSFooter  from './application/view/LMSFooter';
import Home from './application/view/Home';
import { AccessAndAuthorizationContainer } from './login/view/AccessAndAuthorizationContainer';
import { State } from './state';

import { getSelectedProfile } from './login/state/';

import { connect } from "react-redux";
import { Profile } from './login/model/Profile';

interface InternalState {
    username: string;
    imgUrl: string;
}
    
interface Props{
	selectedProfile: Profile;
}

class App extends React.Component<Props, InternalState> {

    constructor(props: Props) {
        super(props);
    }


    public render() {

		const { selectedProfile } = this.props;
		const loggedIn = selectedProfile.username !== "" && selectedProfile.email !== "";
        return (
            <div className="App">

                <LMSHeader username={selectedProfile.username} imgUrl={selectedProfile.displayPic}/>
                {!loggedIn && 
                <AccessAndAuthorizationContainer/>
                }
                {loggedIn ? <Redirect to="/home" />: null}
                <Switch>
                    <Route path='/home' exact component={Home}/>
                </Switch>
                <LMSFooter/>
            </div>
        );
    }

    

}

const mapStateToProps = (state: State) => ({
	selectedProfile: getSelectedProfile(state)
});

export default connect(mapStateToProps)(App);
