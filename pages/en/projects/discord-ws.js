import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../../../components/nav';
import Footer from '../../../components/footer';
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
                            In this project, I managed to implement a Discord WebSocket Gateway that are used for receiving Discord events such as <code className={textBox}>MESSAGE_CREATE</code>, <code className={textBox}>VOICE_STATE_UPDATE</code>, <code className={textBox}>GUILD_MEMBER_ADD</code>, and more. Every events sent by the Discord Gateway is actually the most crucial feature to Discord libraries such as Discord.js, Discord.py and PyCord itself. Without these events received from the gateway, these modules will be useless, just like an empty shell. I have learnt a lot about WebSocket from this project and realised a bigger potential of this project. It shouldn&apos;t just be a simple Discord WebSocket project. It can be the base of many easy-to-use Discord libraries built by novice coders! This is why I recommend novices who are trying to build a new Discord library to use my Github project as the base of their very own Discord Library. Not only it will reduce the amount of work you have to do to create the library, it will also save you a bunch of time without needing you to learn and research about how to connect to the Discord&apos;s Gateway! This will definitely help you complete your dream of creating your very own Discord library as a novice coder in no time~ Of course if you don't like to fork the entire project of other people&apos;s work, you can also use my Github repository as reference to help you learn how to connect to the Discord Gateway!
                        </p>
                        <div className='mb-3'>
                            <Link href="https://github.com/Edwin15857/discord-ws"><a><h1 className="font-bold text-2xl text-slate-500 pb-2 dark:text-blue-gray-100">Discord WebSocket Github Repository</h1></a></Link>

                            <Image src={ws} alt='' className="bg-slate-700 dark:bg-transparent"></Image>
                        </div>
                    </div>

                </section>
                <Footer />
            </main>
        </div>
    )
}