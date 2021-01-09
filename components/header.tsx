import styles from '../styles/Header.module.css';

function Brand(){
    return (
        <a className={styles.brand}></a>
    );
}
function Header(){
    return (
        <div className={styles.bar}>
            <div className={styles.foreground}>
                <Brand></Brand>
            </div>
            <div className={styles.background}>
                <div className={styles.top}></div>
                <div className={styles.bottom}></div>
            </div>
        </div>
    );
}

export default Header;