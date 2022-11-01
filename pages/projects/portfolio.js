import React from 'react';
import Head from 'next/head';
import Nav from '../../components/nav';
import portfolio from '../../public/portfolio-website.jpg';
import Footer from '../../components/footer';
import Link from 'next/link';
import Image from 'next/image';

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
                    <Nav icons="Project" />
                    <div className="text-center mx-10">
                        <h1 className="font-bold text-2xl text-slate-500 pb-5">
                            Portfolio Website
                        </h1>
                        <p className="text-md">
                            This Portfolio Website was initially built to learn how to make a website using HTML, JavaScript and CSS. As I&apos;m getting better at HTML, I managed to get the website from a plain no CSS webpage to a responsive website with beautiful scroll animations and demonstrate my ability to continue to upskill in Front-end Development. It also have me the opportunity to create an <a href="https://autocode.com/notedwin/apps/portfolio-using-html-in-autocode/"><span className="text-blue-gray-100 dark:text-cyan-500">open source app on Autocode</span></a> to show others how to make a beautiful portfolio website just like mine.
                        </p>
                    </div>

                    <div className="flex justify-center my-8">
                        <iframe src='https://notedwin.co' width={1240} height={720} name='HTML Portfolio Website' />
                    </div>

                </section>
                <Footer />
            </main>
        </div >
    )
}