import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home  from './Home';
interface InternalState {

}

interface Props {

}

class Library extends React.Component<Props, InternalState> {

    render(){
        return(
            <Switch>
                <Route path='/home' component={Home}/>
            </Switch>
        );
    }

}

export default Library;