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
    function getShort(){ //caculates a 2 letter shorthand for display
        let section_name = page.section_choices[page.section];
        if(!section_name){
            return "NULL";
        }
        return section_name.substring(0, 2);
    }
    return (
        <div className={styles.tracker}>
            <div className={styles.tracker_text}>{`0${page.section + 1} | ${getShort().toUpperCase()}`}</div>
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