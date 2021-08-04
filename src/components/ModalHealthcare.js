import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'

export const ModalHealthcare = ({ modal, toggle }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} centered>
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Healthcare App</h5>
                <button type="button" className="btn-close" onClick={toggle} aria-label="Close"></button>
            </div>
            <ModalBody>
                <div>
                    <h6>Summary</h6>
                    <p>
                        The purpose of this application is to help customer or user quickily find the nearest, available clinics that can solve their health problems and making an appointment ahead of time to avoid unnecessary waiting at the clinic. Since not all clinics able to solve all health problems, this application can help them to filter the list of clinics according to their symptoms.
                    </p>
                </div>
                <div>
                    <h6>Technology Used</h6>
                    <p>There might be more technology will be used in the future but for now, here are the list of technology being used or planning to be used:</p>
                    <ul>
                        <li>React (for front end UI)</li>
                        <li>Django & Django REST Framework (for backend API)</li>
                        <li>Postgres (popular DB with Django)</li>
                    </ul>
                </div>
            </ModalBody>
            <ModalFooter>
                <a href="https://github.com/m-amirazmi/healthcare-on-demand" target="_blank" type="btn" className="btn btn-outline-primary">Github Repo</a>{' '}
                <a href="https://dev.amirazmi.me/healthcare/#/" target="_blank" type="btn" className="btn btn-primary">View Live</a>
            </ModalFooter>
        </Modal>
    )
}
