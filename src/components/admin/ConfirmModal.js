import React from 'react'
import {Modal, Button} from 'react-bootstrap'


const ConfirmModal = props => (

    <Modal show={props.show} >
        <Modal.Header>
            <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.message}
        </ Modal.Body>
        <Modal.Footer>
            <Button onClick={() => props.confirm(props.id)}>OK</Button>
            <Button onClick={props.cancel}>Cancel</Button>
        </Modal.Footer>
    </Modal>
)

export default ConfirmModal
