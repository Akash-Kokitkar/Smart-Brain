import React from 'react'

class Sign extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            signemail: ' ',
            signpass: '  '
        }
    }
    onemailchange=(event)=>{
        this.setState({signemail:event.target.value})

    }
    onpasschange=(event)=>{
        this.setState({signpass:event.target.value})

    }

    

    onsubmit=()=>{
        console.log(this.state)
        fetch('https://smartimg.herokuapp.com/signin',
         {method:'post',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify({
                              email:this.state.signemail,
                              password:this.state.signpass
                             }
                             )
        } 
        ).then(response=>response.json()).then(data=>
            { 
                if(data.id)
                {
                    console.log(data);
                    this.props.onload(data)
                    this.props.onroutechange('home')
                }
        })

       


    }
    render()
    {
        const {onroutechange}=this.props;
        return(
            

            <div>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onemailchange}
                                   
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onpasschange}
                                   
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                              
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in"
                                onClick={()=>{this.onsubmit()}}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p  className="f6 link dim black db pointer" onClick={()=>onroutechange('register')}>Register</p>
                        </div>
                    </div>
                </main>
            </article>



        </div>

        );
    }
}  
    
    




export default Sign
