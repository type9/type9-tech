import styles from '../styles/Nav.module.css';
import { useContext, cloneElement } from 'react';
import { PageContext } from '../components/page_context';

function NavItem({
    name,
    active,
    index,
    on_click
}: {
    name:string,
    active:boolean,
    index:number,
    on_click:(index: number) => void
}) {
    let this_style = styles.navitem
    if(active){ this_style = styles.navitem_active} // applies active styling

    return (
        <a href={"#" + name}>
            <li className={this_style} key={name} onClick={() => on_click(index)}>
                {name.toUpperCase()}
            </li>
        </a>
    );
}

export default function Nav(){
    const page = useContext(PageContext);
    
    function populate_sections(){
        let index = 0; //tracks which section index the link will correspond to
        return page.section_choices.map(section => {
            let active:boolean = false;
            if(index === page.section){
                active = true;
            }
            index += 1; //iterates up 1
            return cloneElement(
                <NavItem
                    name={section}
                    active={active}
                    on_click={page.navigate_to}
                    index={index - 1} //because we have to iterate before we return, we subtract 1 to maintain accuracy
                />
            );
        });
    }
    return (
        <div className={styles.nav_container}>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    {populate_sections()}
                </ul>
            </nav>  
        </div>
        
    );
};