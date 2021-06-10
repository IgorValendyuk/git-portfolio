import './App.scss';
import Nav from './comonents/Nav/Nav'
import ProfileContainer from './comonents/Profile/ProfileContainer'
import News from './comonents/News/News'
import Settings from './comonents/Settings/Settings'
import Music from './comonents/Music/Music'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './comonents/Dialogs/DialogsContainer';
import UsersContainer from './comonents/Users/UsersContainer';
import HeaderContainer from './comonents/Header/HeaderContainer';
import Login from './comonents/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './comonents/common/Preloader/Preloader';



class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="Wrapper_container">
          <div className="Header_container">
            <HeaderContainer />
          </div>
          <div className="Content_container" >
            <Nav friendsData={this.props.friendsData} />

            <Route path="/dialogs"
              render={() => <DialogsContainer />} />

            <Route path="/profile/:userId?"
              render={() => <ProfileContainer />} />

            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/news" render={() => <News />} />

            <Route path="/users"
              render={() => <UsersContainer />} />

            <Route path="/login"
              render={() => <Login />} />

          </div>
        </div>
      </BrowserRouter >
    )
  };
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App);



