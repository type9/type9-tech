import  { useState, useEffect, useRef } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function SectionWrap({
    scroller, // bounding parent element
    section_index,
    trigger_section_change,
    children
}:{
    scroller
    section_index: number
    trigger_section_change: (section_index: number) => (void)
    children
}){
    const eleRef = useRef()
    useScrollPosition(
        ({prevPos, currPos}) => {
            let isScrollingDown = prevPos.y < currPos.y;
            let midway_point = scroller.getBoundingClientRect().top + (scroller.current.clientHeight/2)
            if(midway_point < currPos.y){ // check if the current position has passed the midway_point
                if(isScrollingDown){
                    trigger_section_change(section_index); //update to the next section
                } else {
                    trigger_section_change(section_index - 1); //update the previous section
                }
            }
        },
        [],
        eleRef,
        false,
        100,
        scroller
    );

    return(
        <div>
            {children}
        </div>
    );
};