import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../../components/nav';
import Footer from '../../../components/footer';

export default function DiscordWS() {
    const textBox = "font-bold p-1 border-2 rounded-md fill-white"
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
                        <h1 className="font-bold text-2xl text-slate-500 pb-5">
                            Discord WebSocket
                        </h1>
                        <p className="text-md mb-16 dark:text-white">
                            In this project, I managed to implement a Discord WebSocket Gateway that are used for receiving Discord events such as <code className={textBox}>MESSAGE_CREATE</code>, <code className={textBox}>VOICE_STATE_UPDATE</code>, <code className={textBox}>GUILD_MEMBER_ADD</code>, and more.
                        </p>
                        <Link href="https://github.com/Edwin15857/discord-ws"><a><h1 className="font-bold text-2xl text-slate-500 pb-5">Discord WebSocket Github Repository</h1></a></Link>
                    </div>

                </section>
                <Footer />
            </main>
        </div>
    )
}