import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { ProfileDetailsContainer } from '../../profile/views/ProfileDetailsContainer';
interface InternalState {

}

interface Props {

}

class Home extends React.Component<Props, InternalState> {


    componentWillMount(){
    }

    render(){
        return(
			<React.Fragment>
				<div className="encloser">
					<Tab.Container id="left-tabs-example" defaultActiveKey="second">
						<Row>
							<Col sm={5}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item className="customLink">
									<Nav.Link eventKey="first" >Profile</Nav.Link>
								</Nav.Item>
								<Nav.Item className="customLink">
									<Nav.Link eventKey="second">My Subscriptions</Nav.Link>
								</Nav.Item>
								<Nav.Item className="customLink">
									<Nav.Link eventKey="third">User Management</Nav.Link>
								</Nav.Item>
								<Nav.Item className="customLink">
									<Nav.Link eventKey="fourth" justify="true">Helpdesk</Nav.Link>
								</Nav.Item>
							</Nav>
							</Col>
							<Col sm={25}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<ProfileDetailsContainer/>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<div>Saint</div>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<div> for user management...visible only to admins</div>
								</Tab.Pane>
								<Tab.Pane eventKey="fourth">
									<div> complaints and suggestions</div>
								</Tab.Pane>
							</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</div>
			</React.Fragment>
        );
    }

}

export default Home;