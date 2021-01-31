import { resolveTxt } from 'dns';
import {useLayoutEffect, useRef} from 'react';
import styles from '../styles/Landing.module.css';

export default function Landing({inFocus}:{inFocus:boolean}){
    const t1 = useRef(null);
    const t2 = useRef(null);
    const t3 = useRef(null);

    let typeSpeed = 100; //max ms between char
    let delete_speed = typeSpeed/2;
    let buffer = 800; //ms between type sequences
    let time_before_delete = 1600;
    let cursor_style = ".15em solid #6D0303";
    let animate_style = "typing 3.5s steps(40, end), blink-caret .75s step-end infinite"

    function animateType(target, text){
        function animate(isOn){
            if(!target.current){return};
            target.current.style.animation = isOn ? animate_style : "";
            target.current.style.borderRight = isOn? cursor_style : "";
        }
        let i = 0; //counting number of characters written
        if(!target.current){return};
        animate(true);
        setTimeout(() => animate(false), typeSpeed * text.length);
        function type(){
            if(!target.current){return};
            if (i < text.length){
                target.current.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, typeSpeed);
            }
        }
        type();
    }

    function animateDelete(target){
        function animate(isOn){
            if(!target.current){return};
            target.current.style.borderRight = isOn? cursor_style : "";
        }
        if(!target.current){return};
        animate(true);
        let wait_time = target.current.innerHTML * delete_speed
        setTimeout(() => animate(false), wait_time);
        function deleteText(){
            if(!target.current){return};
            if(target.current.innerHTML.length > 0){
                target.current.innerHTML = target.current.innerHTML.slice(0, -1);
                setTimeout(deleteText, delete_speed);
            }
        }
        deleteText();
    }

    function typeSequentially(t1, t2 ,t3, s1, s2, s3){
        animateType(t1, s1);
        setTimeout(() => animateType(t2, s2),
            (s1.length * typeSpeed) + buffer
        );
        setTimeout(() => animateType(t3, s3),
            (s1.length + s2.length) * typeSpeed + buffer*2
        );
        return (s1.length + s2.length + s3.length) * typeSpeed + buffer*3
    }

    function deleteSequentially(t1, t2 , t3){
        animateDelete(t3)
        if(!(t1.current && t2.current && t3.current) && inFocus){return}
        setTimeout(() => animateDelete(t2),
            (t3.current.innerHTML.length * delete_speed) + buffer
        );
        setTimeout(() => animateDelete(t1),
            (t3.current.innerHTML.length + t2.current.innerHTML.length) * delete_speed + buffer*2
        );
        return (t1.current.innerHTML.length + t2.current.innerHTML.length + t3.current.innerHTML.length) * delete_speed +  buffer*3
    }

    function randInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    useLayoutEffect(() => {
        let s1_bank = ["GABRIEL", "TYPE9"]
        let s2_bank = ["WEB_DEV", "MIXOLOGIST", "DESIGNER"]
        let s3_bank = ["DIGITAL_EXPERIENCES", "DYNAMIC_DESIGN", "DATA_VISUALIZATION"]
        let s1 = "GABRIEL";
        let s2 = "CS_STUDENT";
        let s3 = "CODING";

        function animateLanding(s1, s2, s3){
            if(!(t1.current && t2.current && t3.current) && inFocus){return}
            let type_time = typeSequentially(t1, t2 , t3, s1, s2, s3);
            let delete_time: number;
            setTimeout(() => {delete_time = deleteSequentially(t1, t2, t3)}, type_time + time_before_delete)

            let total_buffer = 2*type_time+ time_before_delete + type_time/2;
            console.log(total_buffer);
            setTimeout(() => animateLanding(
                s1_bank[randInt(s1_bank.length)],
                s2_bank[randInt(s2_bank.length)],
                s3_bank[randInt(s3_bank.length)]
            ), total_buffer);
        }
        
        if(inFocus){
            animateLanding(s1, s2, s3);
        }
    });

    let expanded = (           
        <div className={styles.landing_textbox}>
            <div className={styles.text_row}>
            <h2 className={styles.h2}>Hi I'm </h2><h2 ref={t1} className={`${styles.h2} ${styles.h2_red}`}></h2>
            </div>
            <div className={styles.text_row}>
            <h2 className={styles.h2}>I'm a </h2><h2 ref={t2} className={`${styles.h2} ${styles.h2_red}`}></h2>
            </div>
            <div className={styles.text_row}>
            <h2 className={styles.h2}>I enjoy </h2><h2 ref={t3} className={`${styles.h2} ${styles.h2_red}`}></h2>
            </div>
        </div>
    ); 
    let collapsed = (
        <div className={styles.brand_name}>TYPE9</div>
    );
    return(
        <div className={styles.landing_container}>
            {inFocus ? expanded : collapsed}
        </div>
    );
}