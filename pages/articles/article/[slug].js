import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function PostPage({
    frontmatter: { title, date }, slug, content, }) {
    return (
        <body className='max-w-max overflow-x-hidden'>
            <Header />
            <div className="text-gray-200 leading-normal tracking-normal">
                <div className="mt-8">
                    <h1 className="mx-8">{title}</h1>
                    <p className="mx-8">Posted on {date}</p>
                </div>
                <div className="mx-8">
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div>
                <Footer />
            </div>
        </body>
    )
}


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {

    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}

