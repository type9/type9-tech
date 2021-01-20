import { SecureServerOptions } from 'http2';
import react, { createContext, useState } from 'react';
import Head from 'next/head'
import dynamic from "next/dynamic";

//COMPONENTS
import { PageContext } from '../components/page_context';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Header from '../components/header';
//SECTION COMPONENTS
import ProjectSection from '../components/index_sections/projects_section';
import AboutMeSection from '../components/index_sections/aboutme_section';
import DevBlogSection from '../components/index_sections/devblog_section';

//STYLES
import styles from '../styles/Home.module.css';

//DATA
import projects_data from '../data/projects.json';
import sections_data from '../data/sections.json';

export default function Index({
  sections
}: {
  sections: Array<string>
}) {

  //PAGE CONTEXT - Handles the global context data
  const [section, set_section] = useState(-1);

  function navigate_to(section: number) { //change current section
    set_section(section);
  }

  let page_state = { //combined state to be passed to nested components
    section: section,
    section_choices: sections,
    set_section: set_section,
    navigate_to: navigate_to
  }
  
  let scroller_toggle = styles.scroller //hides scrolling if on landing
  if(section === -1){scroller_toggle = styles.scroller_hide}

  return (
    <Layout>
      <PageContext.Provider value={page_state}>
        <Header/>
        <div className={styles.content}>
          <Nav/>
          <div className={scroller_toggle}>
              <ProjectSection projects={projects_data['projects']}/>
              <AboutMeSection/>
              <DevBlogSection/>
          </div>
        </div>
      </PageContext.Provider>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      sections: sections_data['sections']
    },
  }
}