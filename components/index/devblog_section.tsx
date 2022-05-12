//IMPORTS
import dynamic from 'next/dynamic';
import {useEffect, useRef} from 'react';

let medium;
// if(typeof window !== 'undefined'){
//     medium = require('../../public/scripts/mediumwidget');
// }

//STYLES
import styles from '../../styles/DevBlog.module.css';

export default function DevBlog(){
    const widgetRef = useRef(null);
    let widget_style_path = "/styles/medium_widget.css"

    let widget_params = {
        renderTo: '#medium-widget',
        params: {
            "resource": "https://medium.com/@type9",
            "postsPerLine": 1,
            "limit": 4,
            "picture": "big",
            "fields": ["description","author","claps","publishAt"],
            "ratio": "landscape"
        }
    }

    useEffect(() => {
        if(medium){
            medium.init(widget_params);
        }
    })

    return (
        <div id="dev_blog" className={styles.devblog_section}>
            <div className={styles.header_container}>
                <h1 className={styles.h1}>Dev Blog</h1>
            </div>
            <link rel="stylesheet" type="text/css" href={widget_style_path}/>
            <div id="medium-widget" ref={widgetRef}></div>
        </div>
    );
}