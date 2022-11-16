import Head from 'next/head'
import SearchBox from '../components/SearchBox'

export default function Home() {
  return (
   <div> 
    <Head>
      <title>weather app</title>
    </Head>

    <div className="home">

      <div className="container">
        <h1><center>Enter a City</center></h1>
        <SearchBox placeholder="Search for a city" />
      </div>
    </div>


   </div>
  )
}


