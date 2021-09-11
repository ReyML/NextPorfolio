import Link from "next/link"

export default function Post({ post }) {
    return (
        <main className="mt-16 z-10">
            <div className="mx-auto z-10">
                <div className="mb-16 z-10 text-white flex flex-wrap justify-center flex-col items-center sm:flex-wrap md:flex-row md:justify-around gap-0 mx-8 md:mx-40">
                    <h3 className="text-center mt-3 z-10">
                        <p className="z-10 uppercase font-semibold text-lg post-date">{post.frontmatter.date}</p>
                        <Link href={`./articles/${post.slug}`}>
                            <a
                                className="z-10 text-3xl border-b-2 border-none text-blue-300 border-blue-500 font-medium">
                                {post.frontmatter.title}
                            </a>
                        </Link>

                        <p className="z-10 text-xl mt-2 text-gray-200 lg:mx-40 xl:mx-56">{post.frontmatter.excerpt}</p>
                    </h3>
                </div>
            </div>
        </main >
    )
}
