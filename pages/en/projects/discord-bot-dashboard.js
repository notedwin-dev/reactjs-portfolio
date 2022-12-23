import React from 'react';
import Head from 'next/head';
import Nav from '../../../components/nav';
import Footer from '../../../components/footer';
import dbd1 from '../../../public/discord-bot-dashboard-1.jpg';
import dbd2 from '../../../public/discord-bot-dashboard-2.jpg';
import Image from 'next/image';

export default function DBDashboard() {
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
                        <h1 className="font-bold text-slate-500 text-2xl pb-5 dark:text-blue-gray-100">
                            Discord Bot Dashboard
                        </h1>
                        <p className="text-md mb-16 dark:text-white">
                            In this Discord Bot Dashboard, I managed to implement the unique MERN stack - MongoDB as database for storing server informations and configurations; Browser cookies for authentication flow such as logging in with Discord and logging out; Autocode&apos;s HTTP(S) endpoint that allows you to use JavaScript variables in your HTML and write Node.js codes, buffer the HTML from string and return it as an actual webpage (similar to how .ejs and Express works when combined). The project is also completely written in Node.js version 14.
                        </p>
                        <Image src={dbd1} width={1240} height={720} alt=""></Image>
                        <Image src={dbd2} width={1240} height={720} alt=""></Image>
                        <h1 className="font-bold text-2xl text-slate-500 pb-5 dark:text-blue-gray-100">Not Open Source Yet</h1>
                    </div>

                </section>
                <Footer />
            </main>
        </div>
    )
}