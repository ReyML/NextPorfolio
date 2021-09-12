import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'



export default function PostPage({
    frontmatter: { title, date }, slug, content, }) {
    return (
        <>
            <Header />
            <div className="mx-16 text-gray-100 mt-10">
                <div className="mt-8">
                    <h1>{title}</h1>
                    <p>Posted on {date}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
            <Footer />
        </>
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

