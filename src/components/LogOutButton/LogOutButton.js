import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './LogOutButton.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const LogOutButton = (props) => (
  <button
    className="nav-link"
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    className={props.className}
    className="nav-link"
    onClick={() => {
      props.dispatch({ type: 'LOGOUT' });
      props.history.push('/login');
    }}
  >
    Log Out {props.store.user.username}
  </button>
);

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect(mapStoreToProps)(withRouter(LogOutButton));