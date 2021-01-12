//IMPORTS

//STYLES
import styles from '../styles/AboutMe.module.css';

function Brand(){
    return (
        <div className={styles.brand}>
            <div className={styles.brand_image}>
                <img src="/type9_logo.svg"/>
            </div>
        </div>
    );
}

export default function AboutMeSection(){
    return (
        <div id="about_me" className={styles.aboutme_section}>
            <div className={styles.header_container}>
                <h1 className={styles.h1}>About Me</h1>
            </div>
            <div className={styles.brand_container}>
                <Brand />
            </div>
            <div className={styles.tagline_container}>
                <p className={styles.tagline}>
                    I'm an aspiring software engineer from San Francisco. Currently seeking internships for Summer 2021.
                </p>
            </div>
            <div className={styles.description_container}>
                <p className={styles.description}> &#9; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet feugiat sodales. Donec eget orci vitae lacus malesuada semper non at tellus. Aenean vitae blandit lacus. Quisque pharetra erat quis leo condimentum, ut semper ligula tristique. Aliquam molestie nec urna at consectetur. Donec vel quam velit. Quisque a iaculis ex. Fusce tristique porttitor sapien vel faucibus. Integer rhoncus sed nunc eu aliquam. Fusce sem risus, sollicitudin ac sagittis sit amet, dapibus et erat. Ut erat tellus, volutpat eget cursus in, eleifend vel dui. Fusce nisi metus, pulvinar vitae mauris id, viverra consequat mi. In faucibus lacus ac odio tincidunt volutpat. Cras a sapien odio. Proin odio tortor, sagittis in ornare quis, semper id diam. Vivamus consequat metus quis scelerisque blandit. Praesent nec feugiat ex. Nulla finibus feugiat felis quis condimentum.
                </p>
            </div>
        </div>
    );
}