import React from "react";

import "./modal.css";

class Modal extends React.Component {
  render () {
    const showHide = this.props.modal ? "modal modalDisBl" : "modal modalDisNone";
    const modalMain = this.props.modalBackground() !== "modal-main" ? this.props.modalBackground() : "modal-main";
    
    return (
      <div className={showHide}>
        <div className={modalMain}>
          <div className="modalTxt">{this.props.modalText}</div>
          <div className="modalButBox">
            <div className="modalBut" onClick={this.props.modalButton}>Welcome!!!</div>
{/*             <div className="modalBut" onClick={this.props.modalButton} >Re-Sort</div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;