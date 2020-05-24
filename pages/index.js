import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ToDoList from '../components/todolist'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <ToDoList todos={[]}/>
      </main>
    </Layout>
  )
}
