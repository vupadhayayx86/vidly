import React, { Component } from 'react'
import InputText from './InputText'

class Login extends Component{
    state={
        accounts:{
            username:"",
            password:""
        }
    }

    handleChange=(e)=>{
        const accounts={...this.state.accounts}
        accounts[e.currentTarget.name]=e.currentTarget.value
        this.setState({accounts})
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <form>
                        <InputText name="username" label="Username" value={this.state.username} onChange={this.handleChange} />
                        <InputText name="password" label="Password" value={this.state.password} onChange={this.handleChange} />
                        
                        {/* <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' value={this.state.username} onChange={this.handleChange} id="username" className="form-control" placeholder='Enter Username'  />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' value={this.state.password} onChange={this.handleChange} id="password" className="form-control" placeholder='Enter Password'  />
                        </div> */}
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        )
        
    }
}

export default Login;