import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../../components/nav';
import Footer from '../../../components/footer';
import Image from 'next/image';
import ws from '../../../public/discord-websocket.svg'

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
                        <h1 className="font-bold text-2xl text-slate-500 pb-5 dark:text-blue-gray-100">
                            Discord WebSocket
                        </h1>
                        <p className="text-md mb-16 dark:text-white">
                            在这个项目里，我成功连接了 Discord 的 WebSocket 网关。这个网关可以接受到Discord的事件发射器所发送的 <code className={textBox}>MESSAGE_CREATE</code>, <code className={textBox}>VOICE_STATE_UPDATE</code>, <code className={textBox}>GUILD_MEMBER_ADD</code> 等等。Discord网关所发送的事件其实是所有大小型的Discord模块（例如Discord.js，Discord.py及PyCord）本身最关键的功能。少了Discord网关发送的这些Discord事件，这些模块就会像是空壳一样毫无作用。本项目让我学到了很多关于WebSocket的知识并且让我很快的意识到了这个项目其实有着一股更大的潜力。他不该只是简单的Discord WebSocket项目。它是一个可以帮助新手创造更多简单易用的Discord模块的基础项目！因此我强力推荐想要自创Discord模块的新手们拿我的GitHub项目来作为模块的基础。这样以来，既可以减少大部分的工作，亦可以不用学习如何使用 Discord 的 WebSocket 网关。帮助你早日完成你一直心心念念的Discord模块~ 如果不想拿完整的项目照抄的话，你也可以以我的GitHub项目作为参考，以协助你完成WebSocket的连接部分。
                        </p>
                        <div className='mb-3'>
                            <Link href="https://github.com/Edwin15857/discord-ws"><a><h1 className="font-bold text-2xl text-slate-500 pb-2">Discord WebSocket Github Repository</h1></a></Link>

                            <Image src={ws} alt=''></Image>
                        </div>
                    </div>

                </section>
                <Footer />
            </main>
        </div >
    )
}