import styles from '../styles/Landing.module.css';

export default function Landing({infocus}:{infocus:boolean}){
    let content = (           
        <div className={styles.landing_textbox}>
            <div className={styles.header1_container}>
            <h2 className={styles.h2}>Hi I'm </h2><h2 className={styles.h2_red}>GABRIEL</h2>
            </div>
            <div className={styles.header2_container}>
            <h2 className={styles.h2}>I'm a </h2><h2 className={styles.h2_red}>CS_STUDENT</h2>
            </div>
            <div className={styles.header3_container}>
            <h2 className={styles.h2}>I enjoy </h2><h2 className={styles.h2_red}>DIGITAL_EXPERIENCES</h2>
            </div>
        </div>
    ); 
    if(!infocus){
        content = (<div className={styles.brand_name}>TYPE9</div>)
    }
    return(
      <div id="landing" className={styles.landing_container}>
          {content}
      </div>
    );
}