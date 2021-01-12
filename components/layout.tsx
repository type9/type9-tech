import { useContext } from 'react';
import { PageContext } from './page_context';
import Head from 'next/head';
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';

let siteTitle = 'Type9'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
    const section = useContext(PageContext).section;
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;900&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
                <title>Type9 - {section}</title>
            </Head>
            <main>{children}</main>
        </div>
    )
    }