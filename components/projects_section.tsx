//IMPORTS
import { cloneElement } from 'react';

//STYLES
import styles from '../styles/Project.module.css';

//DATA

interface ProjectTemplate{
    id:number
    title:string
    preview_url:string
    description:string
    medium_url:string | null
    figma_url:string | null
    github_url:string | null
}

function Project({
    title,
    preview_url,
    description,
    medium_url,
    figma_url,
    github_url
}: {
    title:string
    preview_url:string
    description:string
    medium_url:string | null
    figma_url:string | null
    github_url:string | null
}){
    return (
        <section className={styles.project_container}>
            <header className={styles.header}>
                <div className={styles.foreground}>
                    <div className={styles.barspacer}>
                        {title}
                    </div>
                </div>
                <hr className={styles.line}/>
            </header>
            <div className={styles.media}></div>
            <div className={styles.description_container}>
                <p className={styles.description_text}>
                    {description}
                </p>
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
                    medium_url={project.medium_url}
                    figma_url={project.figma_url}
                    github_url={project.figma_url}
                />
            );
        })
    }
    return (
        <div className={styles.project_section}>
            <div className={styles.projects}>
                {populate()}
            </div>
        </div>)
    ;
}