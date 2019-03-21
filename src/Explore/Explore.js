import React, { Component } from 'react'
import exploreView from '../_actions/explore.action'
import { BrowserRouter as Router, Route, Link, NavLink,withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class Explore extends Component {
  componentDidMount(){

      this.props.dispatch(exploreView({apikey:'b794f09c',page:1, s:'ten'}));
  }

  onclick = () => {
    alert()
  }

  render() {
      const {Search = []} = this.props;
    return (
      <div>
       {Search.map((ele,index)=>
         <div key={index}><a onClick={this.onClick}>
         {ele.Title}
         </a></div>
       )}
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { users, authentication ,explore} = state;
  const { user } = authentication;
  const {data: {Search} = {}}  = explore ;
  return {
      user,
      users,
      Search
  };
}

const connectedExplorePage = withRouter(connect(mapStateToProps)(Explore));
export { connectedExplorePage as Explore };