export default function Layout({ children, pageTitle, description }) {
    return (
        <body className="">
            <main>
                <div className="content">{children}</div>
            </main>
        </body>
    );
}
