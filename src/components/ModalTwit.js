import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'

export const ModalTwit = ({ modal, toggle }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} centered>
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Django Twitclone</h5>
                <button type="button" className="btn-close" onClick={toggle} aria-label="Close"></button>
            </div>
            <ModalBody>
                <div>
                    <h6>Summary</h6>
                    <p>
                        This is a simple Twitter clone. The purpose of this application is to learn Django. The application only have several simple CRUD functionality like creating, updating and deleting posts and comments.
                    </p>
                </div>
                <div>
                    <h6>Technology Used</h6>
                    <ul>
                        <li>Django</li>
                        <li>Postgres (popular DB with Django)</li>
                    </ul>
                </div>
            </ModalBody>
            <ModalFooter>
                <a href="https://django-twitclone-app.herokuapp.com/" target="_blank" type="btn" className="btn btn-primary">View Live</a>
            </ModalFooter>
        </Modal>
    )
}
