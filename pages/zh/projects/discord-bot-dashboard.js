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
                        <h1 className="font-bold text-slate-400 text-2xl pb-5 dark:text-blue-gray-100">
                            Discord Bot Dashboard
                        </h1>
                        <p className="text-md mb-16 dark:text-white">
                            在这个Discord 机器人管理网站的项目里，我设法实现了独特的 MERN 堆栈 —— MongoDB 作为存储服务器信息和配置的数据库； 浏览器 cookie 用于身份验证流程，例如使用 Discord 登录和登出网站； Autocode 的 HTTP(S) 端点 - 让你可以把写好的 HTML 转换成字符串并在 HTML 中使用 JavaScript 的函数 及 编写Node.js的代码，最后再从字符串中缓冲成 HTML （类似于 React 的使用方法） . 该项目在没有制作任何HTML文件的情况下，使用了 Node.js v14 完成了编写。
                        </p>
                        <Image src={dbd1} width={1240} height={720} alt=""></Image>
                        <Image src={dbd2} width={1240} height={720} alt=""></Image>
                        <h1 className="font-bold text-2xl text-slate-500 pb-5 dark:text-blue-gray-100">暂未开源</h1>
                    </div>

                </section>
                <Footer />
            </main>
        </div>
    )
}