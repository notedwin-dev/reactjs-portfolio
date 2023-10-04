import React from 'react';
import Head from 'next/head';
import Nav from '../../../components/zh/nav';
import Footer from '../../../components/zh/footer';
import Link from 'next/link';

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Edwin Ng的作品集</title>
                <meta name="description" content="A Next.js Portfolio built by and built for Edwin Ng, aka NotEdwin." />
                <meta property="og:image" content="/me.jpg" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white dark:bg-slate-800">
                <section className="px-10">
                    <Nav icons="Project" />
                    <div className="text-center mx-10">
                        <h1 className="font-bold text-2xl text-slate-400 pb-5 dark:text-blue-gray-100">
                            HTML作品集 / 个人介绍网页
                        </h1>
                        <p className="text-md text-black dark:text-white">
                            这个作品集 / 个人介绍网页原本是用于学习如何使用HTML、JavaScript 和 CSS 制作网站而构建的. 随着我在 HTML 方面的进步，我设法将网站从一个没有 CSS 的普通网页变成了一个具有漂亮元素显示动画的响应式网站，并展示了我继续提升前端开发技能的能力。 这也变成了<a href="https://autocode.com/notedwin/apps/portfolio-using-html-in-autocode/"><span className="text-blue-gray-100 dark:text-cyan-500">我在Autocode上创建的第一个开源网页模板</span></a> 让大家学习如何在Autocode上利用我的模板并且使用HTML制作属于他们自己的作品集/个人网站。
                        </p>
                        <p className="text-md text-black dark:text-white">
                            <a href="https://notedwin-dev.github.io/HTML-Portfolio"><span className='text-blue-gray-100 dark:text-cyan-500'> 点击这里 </span></a>就可以访问完整的网站啦！
                        </p>
                    </div>

                    <div className="flex justify-center my-8">
                        <iframe src='https://notedwin-dev.github.io/HTML-Portfolio' width={1240} height={720} name='HTML Portfolio Website' />
                    </div>

                </section>
                <Footer />
            </main>
        </div >
    )
}