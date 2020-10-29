
import React, {Component} from 'react';
import './App.css';
import Login from './Login'
import { loginUser, verifyUser, removeToken } from './services/auth'
import { updateUserStatus } from './services/api-app'
import Header from './Header'
import Users from './Users'
import './css/App1.css'
import Appearances from './Appearances'
import Friendships from './Friendships'

export default class App extends Component {
  state = {
    userData: {
      username: '',
      password: ''
    },
    appearances: [],
    currentUser: null
  }

  componentDidMount = async () => {
    const currentUser = await verifyUser()

    
    this.setState({
      currentUser
    })
  }

  handleLogin = async (e) => {
    e.preventDefault()
    const currentUser = await loginUser(this.state.userData)
    await updateUserStatus(currentUser.id, true)
      this.setState({
        currentUser
      })
    }
  

  handleSignOut = async (e) => {
    await updateUserStatus(this.state.currentUser.id, false)
    
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')

    removeToken();
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState =>({
      userData: {
        ...prevState.userData,
        [name]: value
      }
    }))
  }
  render() {
    

    return (
      <div className="app">
        {this.state.currentUser ?
          <Header
            currentUser={this.state.currentUser}
            signOut={this.handleSignOut}
          />
          : <Login
          userData={this.state.userData}
          handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            setUser={this.setUser}
          />}
        

        <div className="friend-appearance-container">
          
          {this.state.currentUser && <Friendships currentUser={this.state.currentUser} />}
       
        
          <div className="appearances-list" >
          <Appearances />
          </div>
        </div>

        


        <Users currentUser={this.state.currentUser} />
      </div>
      
    )
  }
}


// export default withRouter(App);
