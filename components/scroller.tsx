import React, { useLayoutEffect, MutableRefObject, useRef, useContext  } from 'react';
import { PageContext } from './page_context';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

//STYLES
import styles from '../styles/Home.module.css';

function sectionPositionHook({
    bounding_ref,
    section_ref,
    section_index,
    change_section
}: {
    bounding_ref: MutableRefObject<HTMLElement>
    section_ref: MutableRefObject<HTMLElement>
    section_index: number
    change_section: (number) => void;
}){
    useScrollPosition(
        ({prevPos, currPos }) => {
            let trigger_height = -(bounding_ref?.current.clientHeight/2) //negative to get a relative trigger height

            let isTriggeredGoingDown = (prevPos.y < trigger_height) &&  (trigger_height < currPos.y)
            let isTriggeredGoingUp = (currPos.y < trigger_height) &&  (trigger_height < prevPos.y)
            if(isTriggeredGoingDown){
                change_section(section_index);
            } else if(isTriggeredGoingUp){
                change_section(section_index - 1);
            }
        },
        [],
        section_ref,
        false,
        300,
        bounding_ref
    );
};

export default function Scroller({
    children
}: {
    children
}){
    const scroller_ele = useRef();
    const page = useContext(PageContext);

    useLayoutEffect(() => { //controls if the scroller is visible
        let hide = page.section == -1?  'none' : 'block'
        scroller_ele.current.style.display = hide
    });

    function render_children(){
        let section_index = 0;
        return React.Children.map(children, child => {
            const section_ref = useRef();
            let args = {
                bounding_ref: scroller_ele,
                section_ref: section_ref,
                section_index: section_index,
                change_section: page.set_section
            };
            sectionPositionHook(args);
            section_index += 1;
            return(
                <div ref={section_ref} key={section_index - 1}>
                    {child}
                </div>
            );
        });
    }
    return(
        <div className={styles.scroller} ref={scroller_ele}>
            {render_children()}
        </div>
    );
}