//IMPORTS
import { cloneElement } from 'react';
import ReactScrollDetect, { DetectSection } from 'react-scroll-detect';

//STYLES
import styles from '../../styles/Project.module.css';

//DATA

interface ProjectTemplate{
    id: number
    title: string
    preview_url: string
    description: string
    media_links: {}
}

function MediaLink({
    url,
    src
}: {
    url: string
    src: string
}) {
    return (
        <a href={url} className={styles.media_link}>
            <img src={src} className={styles.media_icon}></img>
        </a>
    );
}

function Project({
    title,
    preview_url, //TODO: Implement video preview (either gif or youtube)
    description,
    media_links
}: {
    title: string
    preview_url: string
    description: string
    media_links: {}
}){
    function populate_links(){
        let valid_media = ['medium', 'github', 'figma'] //TODO: Make this dynamic

        return valid_media.map(media => {
            if(media_links[media]){
                return cloneElement(
                    <MediaLink
                        url={media_links[media]}
                        src={"/" + media + ".svg"}
                    />
                );
            }
        });
    }

    return (
        <section id={"projects_" + title} className={styles.project_container} key={title}>
            <header className={styles.header}>
                <div className={styles.foreground}>
                    <div className={styles.barspacer}>
                        {title}
                    </div>
                </div>
                <hr className={styles.line}/>
            </header>
            <div className={styles.media}>
                <iframe src={preview_url} width="600" height="225" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
            <div className={styles.description_container}>
                <p className={styles.description_text}>
                    {description}
                </p>
            </div>
            <div className={styles.medialink_container}>
                <div className={styles.links}>
                    {populate_links()}
                </div>
            </div>
            <div className={styles.readmore_container}>
                <a href={media_links['medium']}>
                    <p className={styles.readmore_text}>READ MORE &#8594;</p>
                </a>
            </div>
        </section>
    );
}

export default function ProjectSection({
    projects
}:{
    projects: Array<ProjectTemplate>
}){
    function populate() {
        return projects.map(project => {
            return cloneElement(
                <Project
                    title={project.title}
                    preview_url={project.preview_url}
                    description={project.description}
                    media_links={project.media_links}
                />
            );
        });
    }
    return (
        <div id="projects" className={styles.project_section}>
            <div className={styles.header_container}>
                <h1 className={styles.h1}>Projects</h1>
            </div>
            <div className={styles.projects}>
                {populate()}
            </div>
        </div>)
    ;
}