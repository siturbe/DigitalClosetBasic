import React from "react";
import "./modal.css";



export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };

    render() {
    if(!this.props.show){
        return null;  //will not display a modal if show is false
    }
    return (
        <div className="modal1" id="modal1">
            <div>{this.props.children}</div>
            <div>
                <button
                    className="toggle-button"
                    onClose={e => {
                        this.onClose(e);
                    }}
                >
                    CLOSE
                </button>
            </div>
            
            
        </div>
    )

  }
}