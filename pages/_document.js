import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="bg-[#151515] font-sg">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument