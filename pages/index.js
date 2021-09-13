// @ts-nocheck
import Head from 'next/head'
import Link from 'next/link'
import FooterMain from '../components/FooterMain'


export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-center" >
      <Head>
        <meta name="description"
          content="Indie maker trying to learn many things at once. I know, I have to focus. My dream is to see this description one day on Google :)" />
        <title>Reyml | Reynol Martinez</title>
      </Head>

      <main className="my-28 flex flex-wrap justify-center items-center w-5/6 md:w-3/6 backdrop-blur-md shadow-2xl rounded-md">
        <section className="flex justify-start flex-col my-18 mx-8">
          <h1
            className="font-nunito bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-blue-500 text-2xl text-center md:tracking-widest mt-8 mb-4 leading-tight md:leading-snug">
            Hello, I'm Reyml.
            Welcome to my Portfolio
          </h1>

          <p
            className="select-none text-center font-bold font-vt whitespace-pre-line tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
            Built
            with Tailwind and
            NextJS!</p>
          <div className="flex justify-center my-6 border-green-500 border-2">
            <Link href='/'>
              <a className="hover:scale-125 ease-linear duration-150 hover:bg-red-300  text-lg hover:rotate-12 rounded-full w-20 h-20 hover:text-red-700 bg-red-400 font-nunito text-white tracking-wider flex justify-center items-center">
                Reyml
              </a>
            </Link>
          </div>
        </section>


        <div className="flex justify-center flex-row flex-wrap sm:flex-nowrap items-center w-5/6 pb-8">
          <Link href="/articles/">

            <a className="focus:outline-none ease-in-out duration-200 hover:scale-110 ring-black ring-2 ring-inset mx-2 w-5/6  mt-2 h-12 flex rounded-md items-center text-center">
              <p className="font-fira uppercase mx-auto text-center text-green-100 tracking-wider p-2"> Articles </p>
            </a>
          </Link>
          <a href="https://urbanemoji.netlify.app/"
            className="focus:outline-none ease-in-out duration-200 hover:scale-110 ring-black ring-2 ring-inset mx-2 w-5/6  mt-2 h-12 flex rounded-md  items-center text-center">
            <p className="font-fira uppercase mx-auto text-center text-green-200 tracking-widest p-2">
              Urbanemoji</p>
          </a>
          <a href="mailto:laraveowling@gmail.com"
            className="focus:outline-none ease-in-out duration-200 hover:scale-110 ring-black ring-2 ring-inset mx-2 w-5/6  mt-2 h-12 flex rounded-md items-center text-center">
            <p className="font-fira uppercase mx-auto text-center text-indigo-300 tracking-wider p-2">
              Contact Me</p>
          </a>
        </div>
      </main >

      <FooterMain />
    </div >
  )
}
