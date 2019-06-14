import React from 'react';

interface InternalState {

}

interface Props {

}

class Home extends React.Component<Props, InternalState> {


    componentWillMount(){
    }

    render(){
        return(
            <span>Welcome to the Library Management System</span>
        );
    }

}

export default Home;