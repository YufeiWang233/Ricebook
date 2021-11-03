import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link, Router, Switch, Redirect} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import {Button} from "./common/header/style";
import {updateLoginStatus, updateUserInfo} from "./store/actions";

class App extends Component {
    componentDidMount() {
        const islogin = JSON.parse(localStorage.getItem('login'));
        //console.log(islogin + "hihihih");
        if(islogin) {
            // this.setState({isLogin: true})
            // store.dispatch(login('',''))
            let currentUserInfo = JSON.parse(localStorage.getItem('currentUser'))
            this.props.updateUserInfo(currentUserInfo)
            this.props.updateLoginStatus()
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
  render() {
        console.log(this.props.login)
    return (

      	<BrowserRouter>
      		<div>
                <Header />

                    <Switch>
                        <Route exact path={'/'} render={()=>{
                            // return store.getState().getIn(['login', 'login']) ? <Redirect to='/home'/> : <Login/>
                            return this.props.login ? <Redirect to='/home'/> : <Login/>
                        }}>
                        </Route>
                        <Route  exact path={'/home'} render={()=>{
                            return this.props.login ? <Home/> : <Redirect to='/'/>
                        }}>
                        </Route>
                        <Route exact path={'/profile'} render={()=>{
                            if (this.props.login)
                                return <Profile/>
                            return <Redirect to={'/'}/>
                        }}>
                        </Route>
                    </Switch>
      		</div>
      	</BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateLoginStatus: () => dispatch(updateLoginStatus()),
    updateUserInfo: (user) => dispatch(updateUserInfo(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
