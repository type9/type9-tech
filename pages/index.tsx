import { SecureServerOptions } from 'http2';
import react, { createContext, useState } from 'react';
import Head from 'next/head'
import dynamic from "next/dynamic";

//COMPONENTS
import { PageContext } from '../components/page_context';
import Scroller from '../components/scroller';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Header from '../components/header';
import ProjectSection from '../components/projects_section';

//DYNAMIC IMPORT
const ReactScrollDetect = dynamic(
  () => {
    return import('react-scroll-detect');
  }, { ssr: false }
)
const DetectSection = dynamic(
  () => {
    return import('react-scroll-detect').then(module => { // have to manually pull out named export component
      const { DetectSection } = module;
      return DetectSection;
    });
  }, {ssr: false}
)
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
  const [cur, handle_section_change] = useState(0);
  const [section, set_section] = useState(-1);

  function navigate_to(section: number) { //change current section
    handle_section_change(section);
    set_section(section);
  }

  let page_state = { //combined state to be passed to nested components
    section: cur,
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
          <div className={styles.scroller}>
            <ReactScrollDetect
              index={section}
              triggerPoint='center'
              onChange={handle_section_change}
            >
              <DetectSection>
                <ProjectSection projects={projects_data['projects']}/>
              </DetectSection>
            </ReactScrollDetect>
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