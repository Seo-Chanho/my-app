import React from 'react'
import './topbar.css'

export default function Topbar(){
    return (
        <div className='topbar'>
            <div className='topbarwrapper'>
                <div className='topLeft'>
                    <div className='logo'>GEIM</div>
                </div>
                <div className='topRight'>
                    <div className='login'>login</div>
                </div>
            </div>
        </div>
    )
}