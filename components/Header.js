// @ts-nocheck
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="relative w-full top-0 mb-8">
            <div>
                <nav className="bg-[#292929] bg-opacity-0">
                    <div className="container flex items-center flex-wrap flex-row justify-end p-6 mx-auto text-gray-600">
                        <Link href="/">
                            <a className="absolute left-8 w-16 h-16 -translate-x-5">
                                <a className="rounded-full w-20 h-20 bg-red-400 text-lg  hover:scale-110 ease-linear duration-150 hover:bg-red-300 hover:text-red-700 hover:rotate-12 font-nunito text-white tracking-widest flex justify-center items-center">
                                    Reyml
                                </a>
                            </a>
                        </Link>
                        <Link href="/articles">
                            <a
                                className=" sm:mx-6 p-2 uppercase font-fira text-green-100 text-lg tracking-wider">Articles</a>
                        </Link>
                        <Link href="https://urbanemoji.netlify.app">
                            <a
                                className="font-fira text-green-200 tracking-widest uppercase text-lg sm:mx-6 p-2">UrbanEmoji</a>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
