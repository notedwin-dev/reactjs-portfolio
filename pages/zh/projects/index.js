//Main File located at http://localhost:3000/zh/projects/

import React from 'react';
import Head from 'next/head';
import Nav from '../../../components/zh/nav';
import Footer from '../../../components/zh/footer';
import Projects from '../../../components/zh/projects';

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
                    <Nav icons="Home" />
                    <div className="text-center mx-10">
                        <h1 className="font-bold text-2xl pb-5 text-blue-gray-100">
                            作品集目录
                        </h1>
                        <p className="text-md dark:text-white mb-8">
                            Lorem Ipsum 只是印刷和排版行业的虚拟文本。 自 1500 年代以来，Lorem Ipsum 一直是行业的标准虚拟文本，当时一位不知名的印刷商采用了一个打字机，然后乱打了一串字，做成了一本打字样本书。 它不仅经历了五个世纪，而且经历了电子排版的飞跃，基本保持不变。 它在 1960 年代随着包含 Lorem Ipsum 段落的 Letraset 表的发布而流行起来，最近还随着 Aldus PageMaker 等桌面出版软件（包括 Lorem Ipsum 的版本）而普及。
                        </p>
                    </div>
                    <Projects />
                </section>
                <Footer />
            </main>
        </div >
    )
}