import Head from 'next/head'
import NavBar from '../components/NavBar'
import Title from '../components/Title'
import APITEST from '../components/APITEST'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Title />
      <APITEST />

    </div>
  )
}
