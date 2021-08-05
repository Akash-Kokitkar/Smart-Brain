import React from 'react'

class  Register extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            email: ' ',
            pass: '  ',
            name:''
        }
    }
    onemail=(event)=>{
        this.setState({email:event.target.value})

    }
    onpass=(event)=>{
        this.setState({pass:event.target.value})

    }
    onname=(event)=>{
        this.setState({name:event.target.value})

    }
    onregister=()=>{
        console.log(this.state)
        console.log(this.state)
        fetch('https://smartimg.herokuapp.com/register',
         {method:'post',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify({
                              email:this.state.email,
                              password:this.state.pass,
                              name:this.state.name,
                             }
                             )
        } 
        ).then(response=>response.json()).then(user=>
            { 
                if(user.id)
                {
                this.props.onload(user)
                this.props.onroutechange('home')
                }
        })

       


    }
    

    render()
    
    {
    return (
        <div>
            
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onname}
                                   
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onemail}
                                   
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onpass}
                                   
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                               
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                                onClick={this.onregister}
                               

                                
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p  className="f6 link dim black db pointer" >Register</p>
                        </div>
                    </div>
                </main>
            </article>

            
        </div>
    )
    }
}

export default Register;
