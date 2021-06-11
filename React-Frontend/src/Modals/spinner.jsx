import React from 'react';
import reactDom from 'react-dom';
import './spinner.css';
import CircularProgress from '@material-ui/core/CircularProgress'

function Spinner (props) {
    return reactDom.createPortal(
        <div className="loading__spinner">
            <CircularProgress />
            <h5 style={{marginTop: "10px"}}>Loading</h5>
        </div>
          ,document.getElementById('spinner'))
}

export default Spinner;
