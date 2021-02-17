import { useContext } from 'react';
import { PageContext } from './page_context';
import Head from 'next/head';
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
    const page = useContext(PageContext);
    let section_name = page.section_choices[page.section];
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;900&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/favicon.ico" />
                <title>TYPE9{section_name? " - " + section_name.toUpperCase() : ""}</title>
                <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
            </Head>
            <main>{children}</main>
        </div>
    )
    }