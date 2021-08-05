import React from 'react'

const navbar = ({ onroutechange, isSigned }) => {

    if (isSigned) {
        return (

                <div>
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p className='f3 link dim  back pa3 underline pointer ' onClick={() => onroutechange('signout')} >
                        Sign out
                    </p>
                    <p className='f3 link dim  back pa3 underline pointer ' onClick={() => onroutechange('register')} >
                        Register
                    </p>

                </nav>
                
             


            </div>
        )  
    }
    else{
        return(
            <div>
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p className='f3 link dim  back pa3 underline pointer ' onClick={() => onroutechange('register')} >
                        Register
                    </p>

                </nav>

            </div>
        )
    }     
   

    
    }
    
   

export default navbar
