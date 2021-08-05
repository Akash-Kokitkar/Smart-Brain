import React from 'react'
import './frameimg.css'

const frameimg = ({input,box}) => {
    return (
        <div>
            <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={input} alt ='image' width='500px'
                height='auto'/>
            

            

            <div className='bounding-box' style={{top: box.toprow, right: box.rightcol, bottom: box.bottomrow, left: box.leftcol}}></div>

            </div>

            </div>
            
        </div>
    )
}

export default frameimg