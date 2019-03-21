import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import Dashboard from '../Dashboard';
import {Explore} from '../Explore';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users, match } = this.props;
        return (
            <div className="col-md-12 " >
                <Router>
                    <div>
                        <NavLink
                            to={'dashboard'}
                            activeStyle={{
                                textDecoration: 'none',
                                color: 'black'
                            }}
                        >
                            <span style={{fontSize:'18px'}}>
                                Dashboard
                            </span>
                </NavLink>
                        <NavLink
                            to='explore'
                            activeStyle={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                        >
                        <span style={{fontSize:'18px', marginLeft:'20px'}}>
                            Explore
                        </span>
                            
                </NavLink>
                <div style={{float: 'right'}}>
                    <Link to="logout">Hi {user.firstName} Logout</Link>
                </div>
                <hr style={{color:'black'}}/>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/explore" component={Explore} />
                    </div>
                </Router>


            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };