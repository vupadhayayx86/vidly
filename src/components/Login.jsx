import React, { Component } from 'react'
import InputText from './InputText'
import Joi from 'joi-browser'

class Login extends Component{
    state={
        accounts:{
            username:"",
            password:"",
            
        },
        errors:{
        }
        
    }
    schema={
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }


    validate=()=>{
        const options={
            abortEarly:false
        }
        const {error}= Joi.validate(this.state.accounts,this.schema,options)

        if(!error) return null;

        const errors={};
        for(let item of error.details)
            errors[item.path[0]]=item.message;
        return errors
    }

    validateProperty = ({name,value}) =>{
        const obj={[name]:value};
        const schema={[name]:this.schema[name]}
        const {error}=Joi.validate(obj,schema)
        return error ? error.details[0].message:null;
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const errors=this.validate() || {};
        this.setState({errors} || {})

    }

    handleChange=({currentTarget:input})=>{
        const errors={...this.state.errors}
        const errorMessage=this.validateProperty(input)
        if(errorMessage) errors[input.name]=errorMessage
        else delete errors[input.name]

        const accounts={...this.state.accounts}
        accounts[input.name]=input.value
        this.setState({accounts,errors})
    }

    render(){
        const {errors}=this.state
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                        <InputText name="username" label="Username" value={this.state.username} onChange={this.handleChange} errors={errors.username}/>
                        <InputText name="password" label="Password" value={this.state.password} onChange={this.handleChange} errors={errors.password}/>
                    <button disabled={this.validate()} className="btn btn-primary">Login</button>
                </form>
            </div>
        )
        
    }
}

export default Login;