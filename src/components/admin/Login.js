import React, {Component} from 'react'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
        }
    }

    onChange = (e, name) => {
        this.setState({name: e.target.value})
    } 

  render(){
    return(
      <div className='Login'>
        <h4>Admin Login</h4>
        <form>
            <input type="text" onChange={e => this.onChange(e, "email")} placeholder="Email" />
            <input type="text" onChange={e => this.onChange(e, "password")} placeholder="Password" />
            <button onClick={() => this.props.login(this.state)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
