import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'

export const ModalHairmess = ({ modal, toggle }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} centered>
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Hairmess</h5>
                <button type="button" className="btn-close" onClick={toggle} aria-label="Close"></button>
            </div>
            <ModalBody>
                <div>
                    <h6>Summary</h6>
                    <p>
                        This is an on demand haircut application. The purpose of this application is to allow customer or user to find nearest or any barbershop or hairsalon that can solve their problem because each person has their own hairstyle. They also can make an appointment for the haircut ahead of time so that they do not need to wasting time queueing at the barbershop or hairsalon.
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
                <a href="https://github.com/m-amirazmi/new-haircut-on-demand" target="_blank" type="btn" className="btn btn-outline-primary">Github Repo</a>{' '}
                <a href="https://dev.amirazmi.me/hairmess/#/customer/home" target="_blank" type="btn" className="btn btn-primary">View Live</a>
            </ModalFooter>
        </Modal>
    )
}
