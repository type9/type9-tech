import { SecureServerOptions } from 'http2';
import react, { createContext, useState, useRef } from 'react';
import Head from 'next/head'
import dynamic from "next/dynamic";

//COMPONENTS
import { PageContext } from '../components/page_context';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Header from '../components/header';
//SECTION COMPONENTS TODO: Make these imports dynamic
import ProjectSection from '../components/index/projects_section';
import AboutMeSection from '../components/index/aboutme_section';
import DevBlogSection from '../components/index/devblog_section';
import Scroller from '../components/scroller';

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

  return (
    <Layout>
      <PageContext.Provider value={page_state}>
        <Header/>
        <div className={styles.content}>
          <Nav/>
          <Scroller>
            <ProjectSection projects={projects_data['projects']}/>
            <AboutMeSection/>
            <DevBlogSection/>
          </Scroller>
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