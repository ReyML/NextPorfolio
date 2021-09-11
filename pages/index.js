// @ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/log.jpeg'
import Link from 'next/link'
import FooterMain from '../components/FooterMain'


export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-center" >
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"
          content="Indie maker trying to learn many things at once. I know, I have to focus. My dream is to see this description one day on Google :)" />
        <title>Reyml - Reynol Martinez</title>
        <link rel="icon" href="/log.jpeg" />
      </Head>

      <main className="my-16 mt- md:flex md:flex-row justify-center items-center">
        <section className="flex justify-start flex-wrap flex-col my-18 mx-8 sm:mx-36">
          <h1
            className="my-6 text-white text-4xl font-extrabold md:tracking-widest leading-tight md:leading-snug font-sans ">
            Hello, I'm Reyml.
            Welcome to my Portfolio
          </h1>

          <p
            className="select-none mt-16 sm:mt-8 whitespace-pre-line text-base tracking-wide font-medium text-white font-open-sans-condensed">
            Built
            with Tailwind
            NextJS!</p>
          <div className="block relative ml-4 mr-20 mt-10 mb-12 border-green-500">
            <picture className="">
              <Image src={profilePic} className="rounded-full"
                alt="a picture for my web" width="100" height="100"
              />
            </picture>
          </div>
        </section>


        <div className="flex justify-center flex-col flex-wrap items-center md:w-3/6 md:mr-20 ">

          <Link href="/articles/">
            <a className="focus:outline-none hover:bg-black ease-in-out duration-200 hover:scale-110 mx-auto w-5/6 bg-white rounded-sm mt-2 h-24 flex items-center text-center">
              <p className="font-mono text-2xl uppercase mx-auto hover:text-white text-gray-500 font-semibold tracking-widest p-2 px-24"> Articles </p>
            </a>
          </Link>
          <a href="https://urbanemoji.netlify.app/"
            class="focus:outline-none hover:bg-black ease-in-out duration-200 hover:scale-110 mx-auto w-5/6 bg-white rounded-sm mt-2 h-24 flex items-center text-center">
            <p class="font-mono text-2xl uppercase mx-auto hover:text-white text-gray-500 font-semibold tracking-widest p-2 px-24">
              Urbanemoji</p>
          </a>
          <a href="mailto:laraveowling@gmail.com"
            className="focus:outline-none hover:bg-black ease-in-out duration-200 hover:scale-110 mx-auto w-5/6 bg-white rounded-sm mt-2 h-24 flex items-center text-center">
            <p className="font-mono text-2xl uppercase mx-auto hover:text-white text-gray-500 font-semibold tracking-widest p-2 px-24">
              Contact Me</p>
          </a>
        </div>
      </main >

      <FooterMain />
    </div>
  )
}
