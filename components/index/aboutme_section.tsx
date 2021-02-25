//IMPORTS

//STYLES
import styles from '../../styles/AboutMe.module.css';

function Brand(){
    return (
        <div className={styles.brand}>
            <div className={styles.brand_image}>
                <img src="/type9_logo.svg"/>
            </div>
        </div>
    );
}

export default function AboutMeSection(){
    return (
        <div id="about_me" className={styles.aboutme_section}>
            <div className={styles.header_container}>
                <h1 className={styles.h1}>About Me</h1>
            </div>
            <div className={styles.brand_container}>
                <Brand />
            </div>
            <div className={styles.tagline_container}>
                <p className={styles.tagline}>
                    Hi, I'm Gabriel Lee, a CS student from San Francisco. I'm seeking internships for Summer 2021.
                </p>
            </div>
            <div className={styles.description_container}>
                <p className={styles.description}>
                    I'm an aspiring software engineer currently attending Dominican University, Make School for Applied Computer Science. I enjoy many aspects of modern software development such as designing UI/UX, implemented unique tech stacks, and applying algorithms for interesting results. Outside of coding, however, I like to graphic design, sketch, and bartend.
                    <br></br>
                    <dl>
                        <dt><b>Front-end:</b> React</dt>
                        <dt><b>Back-end:</b> Flask, Django, Node</dt>
                        <dt><b>Databases:</b> MongoDB, SQLite</dt>
                        <dt><b>Languages:</b> Python, Java, Javascript, Golang</dt>
                    </dl>
                    <br></br>
                    <dl>
                        <br></br>
                        <dt><b>Email: </b>
                        <a className={styles.contact_link} href="mailto:gabespersonal@gmail.com">gabespersonal@gmail.com</a></dt>
                        <br></br>
                        <dt><b>LinkedIn: </b>
                        <a className={styles.contact_link} href="https://www.linkedin.com/in/gabrielblee/" target="_blank" rel="noopener noreferrer">GabrielBLee</a></dt>
                        <br></br>
                        <dt><b>Github: </b>
                        <a className={styles.contact_link} href="https://github.com/type9" target="_blank" rel="noopener noreferrer">type9</a></dt>
                        <br></br>
                    </dl>
                    <dt><b>Resume PDF: </b>
                        <a className={styles.contact_link} href="https://drive.google.com/file/d/1tAaxh6_zhD8fQkkC8YE6w8TXgtDbh65c/view?usp=sharing" target="_blank" rel="noopener noreferrer">Google Drive</a></dt>
                        <br></br>
                </p>
            </div>
        </div>
    );
}