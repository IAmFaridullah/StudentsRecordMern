import React from 'react';
import reactDom from 'react-dom';
import './Modal.css';

function Modal (props) {
    return reactDom.createPortal(
        <div className="popup__modal">
          <div className='modal__header'><h2>Are You Sure?</h2></div>
          <div className='modal__content'>{`Do You Really Want To Delete ${props.record}'s Record?`}</div>
          <div className='modal__footer'>
              <button onClick={props.delete} className="btn btn-primary modal__btns">Yes</button>
              <button onClick={props.isClose} className="btn btn-danger modal__btns">No</button>
          </div>
        </div>,
    document.getElementById('modal'))
}

export default Modal;
