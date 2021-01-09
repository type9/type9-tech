import { SecureServerOptions } from 'http2';
import react, { createContext, useState } from 'react';
import Head from 'next/head'

//COMPONENTS
import { PageContext } from '../components/page_context';
import Header from '../components/header';
import Scroller from '../components/scroller';
import Layout from '../components/layout';
import Nav from '../components/nav';

//STYLES
import styles from '../styles/Home.module.css';

//DATA
import sections_data from '../data/sections.json';

export default function Index({
  sections
}: {
  sections: Array<string>
}) {

  //Page Context
  type section_choices = typeof sections[number] //this type checks to make sure the page is a valid section
  let section: string; //current section
  let set_section = (new_section: section_choices) => { //change current section
    section = new_section;
    return null;
  }
  let page_state = { //combined state to be passed to nested components
    section: section,
    section_choices: sections,
    set_section: set_section,
  }

  return (
    <Layout>
      <PageContext.Provider value={page_state}>
        <Head>
            <title>Type9</title>
        </Head>
        <Header></Header>
        <Nav/>
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