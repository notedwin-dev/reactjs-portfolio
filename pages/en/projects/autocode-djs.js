import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../../components/nav';
import Footer from '../../../components/footer';

export default function discordJS() {
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
                    <Nav icons="Project" />
                    <div className="text-center mx-10">
                        <h1 className="font-bold text-2xl text-slate-400 pb-5 dark:text-blue-gray-100">
                            Autocode Discord.js
                        </h1>
                        <p className="text-md mb-16 dark:text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link href="https://github.com/Edwin15857/autocode-discordjs"><a><h1 className="font-bold text-2xl text-slate-500 pb-5 dark:text-blue-gray-100">Autocode-Discord.js Github Repository</h1></a></Link>
                    </div>

                    <div className="flex justify-center my-8">
                        <iframe src='https://github.com/Edwin15857/autocode-discordjs' width={1240} height={720} name='Autocode discord.js Github Repository' />
                    </div>

                </section>
                <Footer />
            </main>
        </div>
    )
}