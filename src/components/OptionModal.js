import React from 'react';
import Modal from 'react-Modal';


const OptionModal = (props) =>{

return (
   <Modal
   isOpen={!!props.selectedOption}
   closeTimeoutMS={200}
   className="modal"
   contentLabel="Selected Options"
   onRequestClose={props.handleClearSelectedOption}>
   
   <h3 className="modal__title">Selected Option</h3>
   {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}

    <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
   </Modal>
)
}

export default OptionModal;