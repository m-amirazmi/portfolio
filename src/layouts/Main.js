import React from 'react'
import { Card, CardBody } from 'reactstrap'
import styles from '../assets/scss/components/Main.module.scss'

export const Main = ({ children }) => {

    const renderSidebar = () => {
        return (
            <div className={styles.sidebarContainer}>
                <div className={`${styles.sidebar} shadow`}>
                    <div className={`${styles.brand} mb-auto`}>
                        <h3 className="py-3">MRZM</h3>
                    </div>
                    <div className={styles.links}>
                        <a href="#hero" className={styles.active} >
                            <i className={`${styles.icons} bi bi-house-door`}></i>
                            <span className={styles.link}>Home</span>
                        </a>
                        <a href="#about" className={styles.active} >
                            <i className={`${styles.icons} bi bi-person`}></i>
                            <span className={styles.link}>About</span>
                        </a>
                        <a href="#skills" className={styles.active} >
                            <i className={`${styles.icons} bi bi-code-square`}></i>
                            <span className={styles.link}>Skills</span>
                        </a>
                        <a href="#works" className={styles.active} >
                            <i className={`${styles.icons} bi bi-briefcase`}></i>
                            <span className={styles.link}>Work</span>
                        </a>
                        <a href="#projects" className={styles.active} >
                            <i className={`${styles.icons} bi bi-journal-code`}></i>
                            <span className={styles.link}>Projects</span>
                        </a>
                        {/* <a href="#contact" className={styles.active} >
                            <i className={`${styles.icons} bi bi-telephone`}></i>
                            <span className={styles.link}>Contact</span>
                        </a> */}
                    </div>
                    <div className="mt-auto pb-4 d-flex flex-column justify-content-center">
                        <p className="px-4 mb-0 text-center text-white">Scroll Bottom</p>
                        <i className="bi bi-arrow-down fs-2 text-white" style={{ textAlign: 'center' }}></i>
                    </div>
                </div>
            </div>
        )
    }

    const renderNote = () => {
        return (
            <div className="d-flex justify-content-center align-items-center">

                <Card className={`${styles.note} border-0 shadow`} style={{ cursor: 'pointer' }}>
                    <CardBody>
                        <p className="mb-0 text-primary">Currently looking for a <span className="fw-bold">Front End Web Developer</span> job. Avalaible from <span className="fw-bold">{new Date().toLocaleDateString("en-MY", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                    </CardBody>
                </Card>
            </div>
        )
    }

    const renderMainContent = () => {
        return (
            <div className={`${styles.mainContainer}`}>
                {renderNote()}
                <div className={styles.mainBody}>
                    {children}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={styles.container}>

                {renderSidebar()}
                {renderMainContent()}
            </div>
        </>
    )
}
