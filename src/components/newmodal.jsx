import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Button, Modal} from 'react-bootstrap'

function MyModal(props) {  
    return (
      <>  
        <Modal scrollable={true} show={props.show} onHide={props.onCloseModal}>
            
            <Modal.Header closeButton>
                <Modal.Title>Texto ironizado</Modal.Title>
            </Modal.Header>

            <Modal.Body>{props.textContent}</Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onCloseModal}>
                Fechar
                </Button>
                <Button variant="primary" onClick={props.onCopyToClipboard}>
                Copiar
                </Button>
            </Modal.Footer>

        </Modal>
      </>
    );
  }
  


  export default MyModal;