import Head from 'next/head'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

let siteTitle = 'Type9'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}