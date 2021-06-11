import React from 'react';
import reactDom from 'react-dom'
import './Backdrop.css';

function Backdrop() {
    return reactDom.createPortal(
        <div className='backdrop'>
            
        </div>,
        document.getElementById('backdrop')
    )
}

export default Backdrop;
