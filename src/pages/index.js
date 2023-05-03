import Head from "next/head";
import Header from "../../components/Header";




export default function Home() {
  return (
   <div>
    <Head>
      <title>Hulu 2.0</title>
      <link rel="icon" href="/public/favicon.ico"/>
    </Head>
    <h1>Lets build Hulu</h1>
    
    {/*  HEADER  */}
    <Header  />

   </div>
  )
}
