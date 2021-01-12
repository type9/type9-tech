import styles from '../styles/Header.module.css';
import { useContext } from 'react';
import { PageContext } from '../components/page_context';

function Brand(){
    return (
        <div className={styles.brand}>
            <a className={styles.brand_inner} href="/">
                <div className={styles.brand_image}>
                    <img src="/type9_logo.svg"/>
                </div>
                <div className={styles.brand_name}>TYPE9</div>
            </a>
        </div>
    );
}

function Tracker(){
    const page = useContext(PageContext);
    return (
        <div className={styles.tracker}>
            <div className={styles.tracker_text}>{page.section}</div>
        </div>
    );
}
function Header(){
    return (
        <header className={styles.bar}>
            <div className={styles.foreground}>
                <div className={styles.barspacer}>
                    <Brand/>
                </div>
                <div className={styles.barspacer}>
                    <Tracker />
                </div>
            </div>
            <hr className={styles.line}/>
        </header>
    );
}

export default Header;