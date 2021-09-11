// @ts-nocheck
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../../components/Post'
import { sortByDate } from "../../utils";

export default function Articles({ posts }) {
    return (
        <>
            <Head>
                <title>Articles</title>
            </Head>
            <Header />
            {posts.map((post, index) => (
                <Post post={post} />
            ))}
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(filename => {
        const slug = filename.replace('md', '')

        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

        const { data: frontmatter } = matter(markdownWithMeta)
        return {
            slug,
            frontmatter
        }
    })

    console.log(posts);

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}