import { SecureServerOptions } from 'http2';
import react, { createContext, useState } from 'react';
import Head from 'next/head'

//COMPONENTS
import { PageContext } from '../components/page_context';
import Scroller from '../components/scroller';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Header from '../components/header';
import ProjectSection from '../components/projects_section';

//STYLES
import styles from '../styles/Home.module.css';

//DATA
import sections_data from '../data/sections.json'; //TEMPORARY REPLACEMENT FOR BACKEND
import projects_data from '../data/projects.json';

export default function Index({
  sections
}: {
  sections: Array<string>
}) {

  //Page Context - This context is global to all child components but should not effect the parent
  type section_choices = typeof sections[number] //this type checks to make sure the page is a valid section
  let section: string; //current section
  let set_section = (new_section: section_choices) => { //change current section
    section = new_section;
  }
  let page_state = { //combined state to be passed to nested components
    section: '00 | NULL',
    section_choices: sections,
    set_section: set_section,
  }

  return (
    <Layout>
      <PageContext.Provider value={page_state}>
        <Header/>
        <Nav/>
        <ProjectSection projects={projects_data['projects']}/>
        <Scroller sections={sections}></Scroller>
      </PageContext.Provider>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call API for sections
  //TODO: IMPLEMENT BACKEND. FETCH CALL WOULD GO HERE
  return {
    props: {
      sections: sections_data['sections'],
    },
  }
}