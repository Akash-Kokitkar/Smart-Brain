import React from 'react'
import './form.css'

const Imageform = ({onchanges ,onsubmit}) => {
    return (
        <div>

            <p className='f3 center'>The magic of brain start here</p>

            <div className='center  '>
              
                <div className='form center w-60 pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text'onChange={onchanges}/>
                
                <button className=' w-30 grow f4 link ph3 dib white bg-light-purple pv2'onClick={onsubmit}>Detect</button>
               

            </div>

            </div>

            
        </div>
    )
}

export default Imageform