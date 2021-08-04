import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container, Card, CardBody, Row, Col, CardImg, Button } from 'reactstrap'
import { Main } from '../layouts/Main'
import avatar from '../assets/images/avatar.svg'
import design from '../assets/images/design.svg'
import front from '../assets/images/front.svg'
import back from '../assets/images/back.svg'
import workExp from '../assets/images/work-exp.svg'
import styles from '../assets/scss/components/Home.module.scss'
import resume from '../assets/resume_muhamad_amir.pdf'
import hairmess from '../assets/images/hairmess.png'
import healthcare from '../assets/images/healthcare.png'
import twitclone from '../assets/images/twitclone.png'
import { ModalHealthcare } from '../components/ModalHealthcare';
import { ModalHairmess } from '../components/ModalHairmess';
import { ModalTwit } from '../components/ModalTwit';

export const Home = () => {
    const [viewEmail, setViewEmail] = useState(false)
    const [copied, setCopied] = useState(false)
    const [modalHealthcare, setModalHealthcare] = useState(false)
    const [modalHairmess, setModalHairmess] = useState(false)
    const [modalTwit, setModalTwit] = useState(false)



    const renderHero = () => {
        const emailText = viewEmail ? 'm.amirazmi@hotmail.com' : ''
        const showEmail = viewEmail && (
            <>
                <input id='copy-email' value={emailText} disabled className='text-center border-0 shadow rounded-pill px-3' style={{ background: '#fff' }} />
                <CopyToClipboard text={emailText} onCopy={() => setCopied(true)}>
                    <span className='ms-2 text-primary' style={{ cursor: 'pointer' }}><i className="bi bi-clipboard"></i> {copied ? 'Copied' : 'Copy'}</span>
                </CopyToClipboard>
            </>
        )
        return (
            <Container id="hero" className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '100vh' }}>
                <div>
                    <h1><span className="text-primary fw-bold">Front End</span><span> Web Developer</span></h1>
                </div>
                <div>
                    <p className="fs-3 fw-lighter" style={{ color: '#bbb' }}>I makes the web design alive by using latest front end technologies.</p>
                </div>
                <div className="mb-4">
                    <img src={avatar} alt="avatar" width="250px" />
                </div>
                <a href={resume} target="_blank" className={`${styles.printResume} d-flex flex-row justify-content-center align-items-center px-3 py-2 mx-2 mb-3 border border-primary text-primary rounded-pill`}>
                    <i className="bi bi-printer fs-6 me-2"></i>
                    <span className="fs-6">Print Resume</span>
                </a>
                <div className="d-flex flex-row">
                    <a className={`${styles.socialIcons} btn btn-outline-primary rounded-circle mx-1 p-2`} data-tip='Twitter' href='https://twitter.com/dev_amirazmi' target='_blank'><i className="bi bi-twitter"></i></a>
                    <a className={`${styles.socialIcons} btn btn-outline-primary rounded-circle mx-1 p-2`} data-tip='LinkedIn' href='https://www.linkedin.com/in/m-amirazmi/' target='_blank'><i className="bi bi-linkedin"></i></a>
                    <a className={`${styles.socialIcons} btn btn-outline-primary rounded-circle mx-1 p-2`} data-tip='WhatsApp' href='https://wa.me/601119821105' target='_blank'><i className="bi bi-whatsapp"></i></a>
                    <button className={`${styles.socialIcons} btn btn-outline-primary rounded-circle mx-1 p-2 `} data-tip='Email' onClick={() => setViewEmail(!viewEmail)} ><i className="bi bi-envelope"></i></button>
                </div>
                <div className='mt-2' style={{ height: '1rem' }}>
                    {showEmail}
                </div>

            </Container>
        )
    }

    const renderAbout = () => {
        return (
            <div className={styles.about}>

                <Container id="about" className="my-5 py-5">
                    <div className={`${styles.titleWhite}`}>
                        <small>
                            <div></div>
                            <span>some info</span>
                        </small>
                        <h6>about me</h6>
                    </div>
                    <Card className={`${styles.aboutContent} border-0 shadow rounded-3 my-5`}>
                        <CardBody className="text-primary">
                            <p className="mb-3 fs-5">
                                Hi, my name is Muhamad Amir bin Azmi, 26 years old and already married. I have been doing Front End Web Development for more than a year now. Previously worked at REKA Studios as <span className="fw-bold">Front End Web Developer </span>using ReactJS and Firebase mainly. However, in last few month in my previous team, I have been developed a microservices using NodeJS, Express and GKE to move away from serverless architecture since the application getting bigger and want to make it more scalable in the future.
                            </p>
                            <p className="mb-3 fs-5">
                                For past few weeks, I also dabble around <span className="fw-bold">Django and Django REST Framework</span> and love the capability of DRF which allows developer to quickily build a very good API that later can be called from the front end through ReactJS.
                            </p>
                            <p className="mb-3 fs-5">
                                Eventhough I am starting to explore more into back end development, my main expertise still on the front end side of web development. <span className="fw-bold">I love the instant results shows on screen</span> when dealing with front end development. So, I plan to improve more my front end skills as well by learning some React Internationalization using React-i18n, animations using React Framer Motion and more.
                            </p>
                            <p className="mb-3 fs-5">
                                I hope in the next job I will learn more about web development as well as making me more into <span className="fw-bold">full stack development</span>  which able me to build something from scratch by myself. Maybe I will start my own SAAS company someday, who knows. Hee...
                            </p>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }

    const renderSkills = () => {
        return (
            <div className={styles.skills}>
                <Container id="skills" className="mt-5 pt-5">
                    <div className={`${styles.titleDark}`}>
                        <small>
                            <div></div>
                            <span>check out my</span>
                        </small>
                        <h6>skills</h6>
                    </div>
                    <Row className="mt-5 fs-5 gx-5">
                        <Col md={4} sm={12} className="mb-3">
                            <Card className="border-0 shadow rounded-3 h-100">
                                <CardBody>
                                    <div className='d-flex justify-content-center'>
                                        <img src={design} alt="design.svg" style={{ width: '30%' }} />
                                    </div>

                                    <div className='mt-5'>
                                        <h4 className='text-center'>Wireframes, Mockups & Designs</h4>
                                    </div>

                                    <div className='my-4'>
                                        <p className='text-center fw-light'>I using design tools to create wireframes and mockups to make things clear before start developing the UI.</p>
                                    </div>

                                    <div className='text-center my-4'>
                                        <p className='text-primary m-0'>Things I designs</p>
                                        <p className='fw-light'>Web</p>
                                    </div>

                                    <div className='text-center my-4'>
                                        <p className='text-primary m-0'>Design tool:</p>
                                        <p className='fw-light'>Figma</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4} sm={12} className="mb-3">
                            <Card className="border-0 shadow rounded-3 h-100">
                                <CardBody>
                                    <div className='d-flex justify-content-center'>
                                        <img src={front} alt="design.svg" style={{ width: '30%' }} />
                                    </div>

                                    <div className='mt-5'>
                                        <h4 className='text-center'>Front End Development</h4>
                                    </div>

                                    <div className='my-4'>
                                        <p className='text-center fw-light'>This is my strong specialty, I'm using latest front end technology to build a responsive, fast web applications.</p>
                                    </div>

                                    <div className='text-center my-4'>
                                        <p className='text-primary m-0'>Technologies I used:</p>
                                        <p className='fw-light mb-1'>HTML5</p>
                                        <p className='fw-light mb-1'>CSS</p>
                                        <p className='fw-light mb-1'>Javascript</p>
                                        <p className='fw-light mb-1'>ReactJS</p>
                                        <p className='fw-light mb-1'>Bootstrap</p>
                                        <p className='fw-light mb-1'>Sass</p>
                                    </div>

                                    <div className='text-center my-4'>
                                        <p className='text-primary m-0'>Front End Dev Tools:</p>
                                        <p className='fw-light mb-1'>VS Code</p>
                                        <p className='fw-light mb-1'>Github</p>
                                        <p className='fw-light mb-1'>Gitlab</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4} sm={12} className="mb-3">
                            <Card className="border-0 shadow rounded-3 h-100">
                                <CardBody>
                                    <div className='d-flex justify-content-center'>
                                        <img src={back} alt="design.svg" style={{ width: '30%' }} />
                                    </div>

                                    <div className='mt-5'>
                                        <h4 className='text-center'>Back End Development</h4>
                                    </div>

                                    <div className='my-4'>
                                        <p className='text-center fw-light'>This is just a small part of my work, but recently I'm implementing Microservices architecture using NodeJS, Docker and Kubernetes.</p>
                                    </div>

                                    <div className='text-center my-4'>
                                        <p className='text-primary m-0'>Technologies I used</p>
                                        <p className='fw-light mb-1'>NodeJS (Javascript Runtime)</p>
                                        <p className='fw-light mb-1'>Django & DRF</p>
                                        <p className='fw-light mb-1'>Docker</p>
                                        <p className='fw-light mb-1'>Kubernetes</p>
                                        <p className='fw-light mb-1'>Firebase (Auth, Realtime Database, Functions)</p>
                                    </div>

                                    <div className='text-center my-4'>
                                        <p className='text-primary m-0'>Back End Dev Tools</p>
                                        <p className='fw-light mb-1'>Firebase CLI</p>
                                        <p className='fw-light mb-1'>Google Cloud Platform (GKE, Firebase, GCE)</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    const renderWorkExperiences = () => {
        return (
            <div className={styles.work}>
                <Container id="works" className="mt-5 pt-5">
                    <div className={`${styles.titleDark}`}>
                        <small>
                            <div></div>
                            <span>let see my</span>
                        </small>
                        <h6>work experience</h6>
                    </div>
                    <Row className="fs-5 mt-5 pt-5 gx-5" style={{ alignItems: "center" }}>
                        <Col md={5}>
                            <img src={workExp} alt="work-exp.svg" style={{ width: '100%' }} />

                        </Col>
                        <Col md={7}>
                            <div>
                                <h4>Front End Web Developer</h4>
                            </div>
                            <div>
                                <p className='mb-1'><span className='text-primary'>REKA Studios,</span> Kuala Lumpur</p>
                            </div>
                            <div className="mb-3">
                                <small>June 2020 - June 2021 <span className='text-primary'>(1 year)</span></small>
                            </div>

                            <div>
                                <p>REKA Studios is my first workplace as a developer after being a self taught for a few months. I have learnt a lot here and have achieved a lot of things. Here, I come with no knowledge about web development and zero in ReactJS until I quite comfortable using ReactJS in building web applications.</p>
                            </div>

                            <div>
                                <p className='my-3 mb-1'>My responsibility</p>
                                <ul>
                                    <li>Maintain, clean up and write documentation for existing codebase.</li>
                                    <li>Develop new features and fix bugs.</li>
                                    <li>Implementing web security.</li>
                                    <li>Exploring latest and stable web technologies to be used in projects.</li>
                                </ul>
                            </div>
                            <div>
                                <p className='my-3 mb-1'>My achievements</p>
                                <ul>
                                    <li>Developing some of major features in SERV. (Manual Input, Job Calendar, Microservices)</li>
                                    <li>Be a "small" dev lead for the SERV project. (Here I learn how to manage timeline for new features).</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    const renderProjects = () => {
        return (
            <div className={styles.work}>
                <Container id="projects" className="mt-5 pt-5">
                    <div className={`${styles.titleDark}`}>
                        <small>
                            <div></div>
                            <span>take a look at</span>
                        </small>
                        <h6>my projects</h6>
                    </div>
                    <div className="pt-5 fs-5">
                        <Card className="mb-5 shadow border-0">
                            <Row>
                                <Col md={6} className="pe-md-0">
                                    <div style={{ height: "360px" }}>
                                        <CardImg left src={healthcare} width="100%" height="100%" style={{ objectFit: "cover" }} alt="healthcare" />
                                    </div>
                                </Col>
                                <Col md={6} className="ps-md-0">
                                    <CardBody className="d-flex flex-column h-100 bg-primary text-white">
                                        <h3>Healthcare App</h3>
                                        <p>
                                            Honestly, there is no suitable name for this application yet that I can think of. But basically this is an on demand healthcare application that allows customer or user to view the nearby clinics that can solve their health problem and make an appointment ahead in the application.
                                        </p>
                                        <p>
                                            Unfortunately this project still in progress. Hope this project can help others soon. Click more info to view more detail.
                                        </p>
                                        <div className="mt-auto ms-auto">
                                            <Button color="light" outline className="me-3" onClick={() => setModalHealthcare(!modalHealthcare)}>More Info</Button>
                                            <a className="btn btn-light" href="https://dev.amirazmi.me/healthcare/#/" target="_blank">View Live</a>
                                        </div>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mb-5 shadow border-0">
                            <Row>
                                <Col md={6} className="pe-md-0">
                                    <div style={{ height: "360px" }}>
                                        <CardImg left src={hairmess} width="100%" height="100%" style={{ objectFit: "cover" }} alt="hairmess" />
                                    </div>
                                </Col>
                                <Col md={6} className="ps-md-0">
                                    <CardBody className="d-flex flex-column h-100 bg-primary text-white">
                                        <h3>Hairmess</h3>
                                        <p>
                                            This is an on demand application for barbershop or salon. Still in progress same as the healthcare one. This application allows customer or user to make an appointment with any barbershop or salon that satisfy their needs.
                                        </p>
                                        <p>
                                            For now, this project only have the front end part. All the data shown just dummy "hardcoded" data in the front end.
                                        </p>
                                        <div className="mt-auto ms-auto">
                                            <Button color="light" outline className="me-3" onClick={() => setModalHairmess(!modalHairmess)}>More Info</Button>
                                            <a className="btn btn-light" href="https://dev.amirazmi.me/hairmess/#/customer/home" target="_blank">View Live</a>
                                        </div>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mb-5 shadow border-0">
                            <Row>
                                <Col md={6} className="pe-md-0">
                                    <div style={{ height: "360px" }}>
                                        <CardImg left src={twitclone} width="100%" height="100%" style={{ objectFit: "cover" }} alt="healthcare" />
                                    </div>
                                </Col>
                                <Col md={6} className="ps-md-0">
                                    <CardBody className="d-flex flex-column h-100 bg-primary text-white">
                                        <h3>Django Twitclone</h3>
                                        <p>
                                            The twitclone application just a simple twitter clone application built with Django. This one I built to learn how Django works. So, all the UI presented in this project comes from Django templates.
                                        </p>
                                        <p>
                                            Just basic CRUD functionality and simple authentication apply to this project.
                                        </p>
                                        <div className="mt-auto ms-auto">
                                            <Button color="light" outline className="me-3" onClick={() => setModalTwit(!modalTwit)}>More Info</Button>
                                            <a className="btn btn-light" href="https://django-twitclone-app.herokuapp.com/" target="_blank">View Live</a>
                                        </div>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }

    const renderFooter = () => {
        return (
            <div className={styles.footer}>
                <Container id="footer" className="text-center pt-5">
                    <p className="text-white">Copyright &copy; 2021 | Muhamad Amir Azmi | Front End Web Developer</p>

                </Container>
            </div>
        )
    }

    return (
        <Main>
            {renderHero()}
            {renderAbout()}
            {renderSkills()}
            {renderWorkExperiences()}
            {renderProjects()}
            {renderFooter()}
            <ModalHealthcare toggle={() => setModalHealthcare(!modalHealthcare)} modal={modalHealthcare} />
            <ModalHairmess toggle={() => setModalHairmess(!modalHairmess)} modal={modalHairmess} />
            <ModalTwit toggle={() => setModalTwit(!modalTwit)} modal={modalTwit} />
        </Main>
    )
}
