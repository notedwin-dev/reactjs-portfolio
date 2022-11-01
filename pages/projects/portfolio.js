import React from 'react';
import Head from 'next/head';
import Nav from '../../components/nav';
import portfolio from '../../public/portfolio-website.jpg';
import Footer from '../../components/footer';

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Edwin Ng&apos;s Portfolio</title>
                <meta name="description" content="A Next.js Portfolio built by and built for Edwin Ng, aka NotEdwin." />
                <meta property="og:image" content="/me.jpg" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white dark:bg-slate-800">
                <section className="px-10">
                    <Nav>
                        <li>
                            <a className="bg-gradient-to-r from-blue-400 to-cyan-600 text-white px-4 py-2 rounded-md" href="/" >Main Page</a>
                        </li>
                        <li>
                            <a className="bg-gradient-to-r from-blue-400 to-cyan-600 text-white px-4 py-2 rounded-md" href="/projects/" >Projects</a>
                        </li>
                    </Nav>
                    <div className="text-center mx-10">
                        <h1 className="font-bold text-2xl pb-5">
                            Portfolio Website
                        </h1>
                        <p className="text-md">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                </section>
                <Footer />
            </main>
        </div>
    )
}