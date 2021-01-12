import styles from '../styles/Nav.module.css';
import { useContext } from 'react';
import { PageContext } from '../components/page_context';

function NavItem({
    name,
    active
}: {
    name:string,
    active:boolean
}) {
    return (
        null
    );
}

export default function Nav(){
    const page = useContext(PageContext);

    return (null);
    // return (
    //     <nav>
    //         <ul>
    //             <li></li>
    //         </ul>
    //     </nav>
    // );
};