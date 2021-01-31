import styles from '../styles/Nav.module.css';
import { useContext, useRef, cloneElement, useEffect } from 'react';
import { PageContext } from './page_context';
import Landing from '../components/landing';

function NavItem({
    name,
    isActive,
    index,
    on_click
}: {
    name:string,
    isActive:boolean,
    index:number,
    on_click:(index: number) => void
}) {
    let style = isActive ? `${styles.navitem} ${styles.navitem_active}` : styles.navitem

    return (
        <li key={name} className={style} onClick={() => on_click(index)}>
            <a href={"#" + name}>{name.toUpperCase()}</a>
        </li>
    );
}

export default function Nav(){
    const page = useContext(PageContext);
    
    function populate_sections(){
        let index = 0; //tracks which section index the link will correspond to
        return page.section_choices.map(section => {
            let isActive = page.section === index
            index += 1; //iterates up 1
            return cloneElement(
                <NavItem
                    name={section}
                    isActive={isActive}
                    on_click={page.navigate_to}
                    index={index - 1} //because we have to iterate before we return, we subtract 1 to maintain accuracy
                />
            );
        });
    }
    return (
        <div className={styles.nav_container}>
            <Landing
                inFocus={page.section < 0}
            />
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    {populate_sections()}
                </ul>
            </nav>  
        </div>
    );
};