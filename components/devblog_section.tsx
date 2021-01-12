//STYLES
import styles from '../styles/DevBlog.module.css';

export default function DevBlog(){
    return (
        <div id="dev_blog" className={styles.devblog_section}>
            <div id='medium-widget'></div>
            <script
                dangerouslySetInnerHTML={{
                __html: `
                MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@gabespersonal","postsPerLine":2,"limit":4,"picture":"big","fields":["description","author","claps","publishAt"],"ratio":"landscape"}});
                `,
                }}
            />
        </div>
    );
}