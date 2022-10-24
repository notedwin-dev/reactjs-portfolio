import Head from 'next/head'
import { BsCodeSlash, BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin, AiFillHtml5 } from 'react-icons/ai';
import { SiCsharp, SiDiscord, SiGit, SiHeroku, SiIntellijidea, SiJava, SiJavascript, SiNextdotjs, SiPython, SiReact, SiReplit, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si';
import { MdOutlineWeb } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { BiCodeBlock } from 'react-icons/bi';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { useState } from 'react';
import Image from 'next/image';
import me from '../public/me.jpg';
import dashboard1 from '../public/discord-bot-dashboard-1.jpg';
import portfolio from '../public/portfolio-website.jpg';
import ws from '../public/discord-ws.png';
import acode_djs from '../public/autocode-discordjs.png';


export default function Home() {
  let tag = "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400"

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Edwin Ng&apos;s Portfolio</title>
        <meta name="description" content="A Next.js Portfolio built by and built for Edwin Ng, aka NotEdwin." />
        <meta property="og:image" content="/me.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-slate-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Edwin Ng</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:fill-yellow-300" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-blue-400 to-cyan-600 text-white px-4 py-2 rounded-md ml-8" href="https://github.com/Edwin15857/reactjs-portfolio/raw/main/pages/Edwin-Ng-Resume.pdf" >Resume</a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center items-center mx-auto mt-20">
            <Image src={me} className="mx-auto rounded-full w-80 h-80" alt='' />
          </div>
          <div className="text-center p-10">
            <h2 className="font-sans text-5xl py-2 text-blue-gray">Edwin Ng</h2>
            <h3 className="font-sans text-2xl py-2 dark:text-white">Back-End Developer and University Student.</h3>
            <p className="font-sans leading-8 text-gray-600 dark:text-gray-300">Currently working on multiple Github Repositories such as discord-ws and autocode-discordjs.</p>
          </div>
          <div className="text-3xl flex justify-center gap-10">

            <a href="https://github.com/Edwin15857"><AiFillGithub className="dark:fill-white" /></a>

            <a href="https://www.linkedin.com/in/edwin-ng-1aa705210"><AiFillLinkedin className="dark:fill-white" /></a>

            <a href="https://www.youtube.com/channel/UCL4zxBUM-m-5NL79joSnsdA"><AiFillYoutube className="dark:fill-white" /></a>

          </div>
        </section>

        <section>
          <div className="text-center">
            <h2 className="font-sans font-semibold text-3xl py-2 text-blue-gray dark:text-cyan-500">Skills</h2>
            <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">Here are some of the <span className="text-blue-gray dark:text-cyan-500">Skills</span>, <span className="text-blue-gray dark:text-cyan-500">Programming Languages</span> and <span className="text-blue-gray dark:text-cyan-500">Tools</span> that I am familiar with.</p>
          </div>

          <div className="lg:flex gap-8">

            <div className="text-center shadow-xl bg-gradient-to-b from-sky-100 to-slate-100 shadow-sky-200 p-10 rounded-xl my-10 dark:shadow-sky-700 dark:from-sky-200 dark:to-slate-200">
              <IoLogoNodejs className="mx-auto text-5xl text-green-500" />
              <h2 className="font-bold text-blue-400 dark:text-green-600">Node.js</h2>
              <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment.</p>
              <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">Tools</h2>
              <div className={tag}><BiCodeBlock className='mr-1' /> Autocode</div>
              <div className={tag}><AiFillGithub className="mr-1" /> Github</div>
              <div className={tag}><SiGit className="mr-1" /> Git</div>
              <div className={tag}><SiReplit className='mr-1' /> Replit</div>
              <div className={tag}><SiHeroku className='mr-1' /> Heroku</div>
              <div className={tag}><SiVisualstudiocode className="mr-1" /> Visual Studio Code</div>
              <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">Libraries</h2>
              <div className={tag}><SiReact className="mr-1" /> React.js</div>
              <div className={tag}><SiNextdotjs className="mr-1" /> Next.js</div>
              <div className={tag}><SiDiscord className='mr-1' /> Discord.js</div>
              <div className={tag}><SiJavascript className='mr-1' /> jimp</div>
              <div className={tag}><SiJavascript className='mr-1' /> lib</div>
              <div className={tag}><SiJavascript className='mr-1' /> node-fetch</div>
              <div className={tag}><SiJavascript className='mr-1' /> canvas</div>
              <div className={tag}><SiJavascript className='mr-1' /> ws</div>
              <div className={tag}><SiJavascript className='mr-1' /> axios</div>
            </div>

            <div className="text-center shadow-xl bg-gradient-to-b from-sky-100 to-slate-100 shadow-sky-200 p-10 rounded-xl my-10 dark:shadow-sky-700 dark:from-sky-200 dark:to-slate-200">
              <BsCodeSlash className="mx-auto text-5xl text-blue-600" />
              <h2 className="font-bold text-blue-400 dark:text-blue-700">Progamming Languages</h2>
              <p>A programming language is a system of notation for writing computer programs.</p>
              <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">Tools</h2>
              <div className={tag}><BiCodeBlock className='mr-1' /> Autocode</div>
              <div className={tag}><AiFillGithub className="mr-1" /> Github</div>
              <div className={tag}><SiGit className='mr-1' /> Git</div>
              <div className={tag}><SiReplit className='mr-1' /> Replit</div>
              <div className={tag}><SiHeroku className='mr-1' /> Heroku</div>
              <div className={tag}><SiIntellijidea className='mr-1' /> IntelliJ</div>
              <div className={tag}><SiVisualstudiocode className='mr-0.5' /> Visual Studio Code</div>
              <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">Languages</h2>
              <div className={tag}><SiJavascript className='mr-1' /> JavaScript</div>
              <div className={tag}><SiJava className='mr-1' /> Java</div>
              <div className={tag}><SiPython className='mr-1' /> Python</div>
              <div className={tag}><SiCsharp className='mr-1' /> C#</div>
              <div className={tag}><SiTypescript className='mr-1' /> TypeScript</div>
            </div>

            <div className="text-center shadow-xl bg-gradient-to-b from-sky-100 to-slate-100 shadow-sky-200 p-10 rounded-xl my-10 dark:shadow-sky-700 dark:from-sky-200 dark:to-slate-200">
              <MdOutlineWeb className="mx-auto text-5xl text-yellow-500" />
              <h2 className="font-bold text-blue-400 dark:text-yellow-600">Web Development</h2>
              <p>Web development is the work involved in developing a website for the Internet</p>
              <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">Tools</h2>
              <div className={tag}><BiCodeBlock className='mr-1' /> Autocode</div>
              <div className={tag}><AiFillGithub className="mr-1" /> Github</div>
              <div className={tag}><SiGit className="mr-1" /> Git</div>
              <div className={tag}><SiReplit className='mr-1' /> Replit</div>
              <div className={tag}><SiHeroku className='mr-1' /> Heroku</div>
              <div className={tag}><SiVisualstudiocode className="mr-1" /> Visual Studio Code</div>
              <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">Skills</h2>
              <div className={tag}><SiReact className="mr-1" /> React.js</div>
              <div className={tag}><SiNextdotjs className="mr-1" /> Next.js</div>
              <div className={tag}><SiTailwindcss className="mr-1" /> Tailwind CSS</div>
              <div className={tag}><AiFillHtml5 className='mr-1' /> HTML</div>
              <div className={tag}><IoLogoCss3 className='mr-1' /> CSS</div>
              <div className={tag}><IoLogoJavascript className="mr-1" /> JavaScript</div>
              <div className={tag}><TbApi className="mr-1" /> REST API</div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h2 className="font-sans font-semibold text-3xl py-2 text-blue-gray dark:text-cyan-500">Projects</h2>
            <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">Here are some of the <span className="text-blue-gray dark:text-cyan-500">projects</span> that I have built.</p>
          </div>
          <div>
            <div className="grid gap-10 mb-10 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 ">
              <a href="https://notedwin.autocode.dev/discord-bot-dashboard@dev/">
                <Image src={dashboard1} alt='' className="rounded-xl" />
                <h3 className="font-bold text-center dark:text-cyan-500"> Discord Bot Dashboard </h3>
                <p className="text-center dark:text-white">A Discord Bot Dashboard Web Application created using Autocode.</p>
              </a>
              <a href="https://notedwin.co">
                <Image src={portfolio} alt='' className="rounded-xl"></Image>
                <h3 className="font-bold text-center dark:text-cyan-500"> Portfolio Website </h3>
                <p className="text-center dark:text-white">A Portfolio Website Template created as beginners tutorial on Autocode.</p>
              </a>
              <a href='https://www.github.com/Edwin15857/discord-ws'>
                <Image src={ws} alt='' className="rounded-xl"></Image>
                <h3 className="font-bold text-center dark:text-cyan-500"> Discord WebSocket </h3>
                <p className="text-center dark:text-white">Allows developers to easily implement Discord Gateway without worrying about the backend.</p>
              </a>
              <a href='https://www.github.com/Edwin15857/autocode-discordjs'>
                <Image src={acode_djs} alt='' className="rounded-xl"></Image>
                <h3 className="font-bold text-center dark:text-cyan-500"> Autocode Discord.js </h3>
                <p className="text-center dark:text-white">Created to make support for discord.js possible on Autocode&apos;s serverless environment.</p>
              </a>
            </div >
          </div >
        </section >
        <footer className="flex justify-left gap-10">
          <a href="mailto:me@notedwin.co" className=" dark:text-white">Contact</a>
          <a href="#" className="dark:text-white">About Me</a>
        </footer>
      </main >
    </div >
  )
}
