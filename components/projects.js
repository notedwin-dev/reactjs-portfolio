/**
 * It's a function that returns a div that contains a grid of images and text.
 * @returns A React Component.
 */
import React from 'react';
import Image from 'next/image';
import dashboard1 from '../public/discord-bot-dashboard-1.jpg';
import portfolio from '../public/portfolio-website.jpg';
import ws from '../public/discord-ws.png';
import acode_djs from '../public/autocode-discordjs.png';
import Link from 'next/link';

export default function Projects() {
    let hover = "hover:p-4 hover:shadow-md hover:shadow-slate-400 hover:rounded-xl dark:hover:shadow-cyan-600";
    let tag = "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400";
    return (
        <div>
            <div className="grid gap-10 mb-10 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 ">
                <div id="dashboard" className={hover}>
                    <Link href="projects/discord-bot-dashboard/" target="blank">
                        <Image src={dashboard1} alt='' className="rounded-xl" />
                    </Link>
                    <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500"> Discord Bot Dashboard </h3>
                    <p className="text-center dark:text-white">A Discord Bot Dashboard Web Application created using Autocode.</p>

                    <div>
                        <h1 className="font-semibold text-xl inline-flex text-cyan-500">Tags:</h1>
                        <div className={tag}>Node.js</div>
                        <div className={tag}>lib</div>
                        <div className={tag}>MongoDB</div>
                        <div className={tag}>HTML</div>
                        <div className={tag}>CSS</div>
                        <div className={tag}>JavaScript</div>
                    </div>

                </div>
                <div id="portfolio" className={hover}>
                    <Link href="/projects/portfolio" target="blank">
                        <Image src={portfolio} alt='' className="rounded-xl"></Image>
                    </Link>
                    <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500"> Portfolio Website </h3>
                    <p className="text-center dark:text-white">A Portfolio Website Template created as beginners tutorial on Autocode.</p>

                    <div>
                        <h1 className="font-semibold text-xl inline-flex text-cyan-500">Tags:</h1>
                        <div className={tag}>HTML</div>
                        <div className={tag}>CSS</div>
                        <div className={tag}>JavaScript</div>
                    </div>

                </div>
                <div id="websocket" className={hover}>
                    <Link href='/projects/discord-ws' target="blank">
                        <Image src={ws} alt='' className="rounded-xl"></Image>
                    </Link>
                    <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500"> Discord WebSocket </h3>
                    <p className="text-center dark:text-white">Allows developers to easily implement Discord Gateway without worrying about the backend.</p>

                    <div>
                        <h1 className="font-semibold text-xl inline-flex text-cyan-500">Tags:</h1>
                        <div className={tag}>Node.js</div>
                        <div className={tag}>JSON</div>
                        <div className={tag}>ws</div>
                    </div>

                </div>
                <div id="discord.js" className={hover}>
                    <Link href='/projects/autocode-djs' target="blank">
                        <Image src={acode_djs} alt='' className="rounded-xl"></Image>
                    </Link>
                    <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500"> Autocode Discord.js </h3>
                    <p className="text-center dark:text-white">Created to make support for discord.js possible on Autocode&apos;s serverless environment.</p>

                    <div>
                        <h1 className="font-semibold text-xl inline-flex text-cyan-500">Tags:</h1>
                        <div className={tag}>Node.js</div>
                        <div className={tag}>lib</div>
                    </div>

                </div>
            </div >
        </div >
    )
}
