// @ts-nocheck
import Image from 'next/image'
import profilePic from '../public/profile/log.jpeg'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="relative w-full top-0 mb-8">
            <div>
                <nav className="bg-[#292929] bg-opacity-0">
                    <div className="container flex items-center flex-wrap flex-row justify-end p-6 mx-auto text-gray-600 capitalize">
                        <Link href="/">
                            <a className="absolute left-8 w-16 h-16 -translate-x-5">
                                <picture>
                                    <Image
                                        className="opacity-100 rounded-full object-cover bg-no-repeat" src={profilePic} alt="a picture for my web" width="100" height="100" />
                                </picture>
                            </a>
                        </Link>
                        <Link href="/articles">
                            <a
                                className=" sm:mx-6 p-2 text-xs uppercase font-fira text-green-100 tracking-wider">Articles</a>
                        </Link>
                        <Link href="https://urbanemoji.netlify.app">
                            <a
                                className="font-fira text-green-200 tracking-widest uppercase sm:mx-6 p-2 text-xs">Urban
                                Emoji</a>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
