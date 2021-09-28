import React from 'react';
import ReactDOM, { render } from 'react-dom';


class Modal extends React.Component {    

    render() {

        return (
        <React.Fragment>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Texto Ironizado</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body breakLine">
                    {this.props.textContent}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={this.props.onCopyToClipboard} id='generate'>Copiar</button>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Modal;