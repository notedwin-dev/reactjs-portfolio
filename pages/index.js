import Head from 'next/head'
import { BsCodeSlash, BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin, AiFillHtml5 } from 'react-icons/ai';
import { SiCsharp, SiInstagram, SiDiscord, SiGit, SiHeroku, SiIntellijidea, SiJava, SiJavascript, SiNextdotjs, SiPython, SiReact, SiReplit, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiYoutube, SiGithub } from 'react-icons/si';
import { MdOutlineWeb } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { BiCodeBlock } from 'react-icons/bi';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import me from '../public/me.jpg';
import dashboard1 from '../public/discord-bot-dashboard-1.jpg';
import portfolio from '../public/portfolio-website.jpg';
import ws from '../public/discord-ws.png';
import acode_djs from '../public/autocode-discordjs.png';
import autocode from '../public/autocode.svg';


export default function Home() {
  let cards = "text-center shadow-xl bg-gradient-to-b from-sky-100 to-slate-100 shadow-sky-200 p-10 rounded-xl my-10 dark:shadow-sky-700 dark:from-sky-200 dark:to-slate-200"
  let tag = "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400"

  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode('dark')
    } else {
      setDarkMode('light')
    }
  }, [])

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <div>
      <Head>
        <title>Edwin Ng&apos;s Portfolio</title>
        <meta name="description" content="A Next.js Portfolio built by and built for Edwin Ng, aka NotEdwin." />
        <meta property="og:image" content="/me.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-slate-800">
        <section className="min-h-screen px-10">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Edwin Ng</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")} className="cursor-pointer text-2xl dark:fill-yellow-300" />
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
            <h2 className="font-sans text-5xl py-2 text-blue-gray-100 dark:text-cyan-500">Edwin Ng</h2>
            <h3 className="font-sans text-2xl py-2 text-black dark:text-white">Back-End Developer and University Student.</h3>
            <p className="font-sans leading-8 text-gray-600 dark:text-gray-300">Currently working on multiple Github Repositories such as discord-ws and autocode-discordjs.</p>
          </div>
          <div className="text-3xl flex justify-center gap-10">
            <a href='https://autocode.com/notedwin' target="blank"><Image src={autocode} alt=''></Image></a>

            <a href="https://github.com/Edwin15857" target="blank"><AiFillGithub className="dark:fill-white" /></a>

            <a href="https://www.linkedin.com/in/edwin-ng-1aa705210" target="blank"><AiFillLinkedin className="dark:fill-white" /></a>

            <a href="https://link.notedwin.co/tutorials-youtube" target="blank"><AiFillYoutube className="dark:fill-white" /></a>

          </div>
        </section>

        <section className='px-10'>
          <div className="text-center">
            <h2 id="skills" className="font-sans font-semibold text-3xl py-2 text-blue-gray-100 dark:text-cyan-500">Skills</h2>
            <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">Here are some of the <span className="text-blue-gray dark:text-cyan-500">Skills</span>, <span className="text-blue-gray dark:text-cyan-500">Programming Languages</span> and <span className="text-blue-gray dark:text-cyan-500">Tools</span> that I am familiar with.</p>
          </div>

          <div className="lg:flex gap-8">

            <div className={cards}>
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

            <div className={cards}>
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

            <div className={cards}>
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

        <section className='px-10'>
          <div className="text-center">
            <h2 id="projects" className="font-sans font-semibold text-3xl py-2 text-blue-gray-100 dark:text-cyan-500">Projects</h2>
            <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">Here are some of the <span className="text-blue-gray-100 dark:text-cyan-500">projects</span> that I have built.</p>
          </div>
          <div>
            <div className="grid gap-10 mb-10 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 ">
              <div id="dashboard">
                <a href="https://notedwin.autocode.dev/discord-bot-dashboard@dev/" target="blank">
                  <Image src={dashboard1} alt='' className="rounded-xl" />
                </a>
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
              <div id="portfolio">
                <a href="https://notedwin.co" target="blank">
                  <Image src={portfolio} alt='' className="rounded-xl"></Image>
                </a>
                <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500"> Portfolio Website </h3>
                <p className="text-center dark:text-white">A Portfolio Website Template created as beginners tutorial on Autocode.</p>

                <div>
                  <h1 className="font-semibold text-xl inline-flex text-cyan-500">Tags:</h1>
                  <div className={tag}>HTML</div>
                  <div className={tag}>CSS</div>
                  <div className={tag}>JavaScript</div>
                </div>

              </div>
              <div id="websocket">
                <a href='https://www.github.com/Edwin15857/discord-ws' target="blank">
                  <Image src={ws} alt='' className="rounded-xl"></Image>
                </a>
                <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500"> Discord WebSocket </h3>
                <p className="text-center dark:text-white">Allows developers to easily implement Discord Gateway without worrying about the backend.</p>

                <div>
                  <h1 className="font-semibold text-xl inline-flex text-cyan-500">Tags:</h1>
                  <div className={tag}>Node.js</div>
                  <div className={tag}>JSON</div>
                  <div className={tag}>ws</div>
                </div>

              </div>
              <div id="discord.js">
                <a href='https://www.github.com/Edwin15857/autocode-discordjs' target="blank">
                  <Image src={acode_djs} alt='' className="rounded-xl"></Image>
                </a>
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
        </section >
        <footer className="md:h-40 lg:h-40">
          <div class="  rounded-xl items-center flex justify-center h-40">
            <div className="flex flex-wrap m-15">
              <div class="flex-col relative m-5">
                <h4 className="font-sans font-bold text-xl dark:text-cyan-500">Quick Links</h4>
                <ul className="list-none text-sm">
                  <li className="dark:text-white"><a href="https://notedwin.co" target="blank">Portfolio</a></li>
                  <li className="dark:text-white"><a href="https://fiverr.com/edwin_2004" target="blank">Services</a></li>
                </ul>
              </div>
              <div className="flex-col relative m-5">
                <h4 className="font-sans font-bold text-xl dark:text-cyan-500">Developers</h4>
                <ul className="list-none text-sm">
                  <li className="dark:text-white"><a href="https://github.com/Edwin15857" target="blank">GitHub</a></li>
                  <li className="dark:text-white"><a href="https://link.notedwin.co/tutorials-youtube" target="blank">YouTube</a></li>
                  <li className='dark:text-white'><a href="https://autocode.com/notedwin/snippets/" target="blank">Autocode Snippets</a></li>
                  <li className='dark:text-white'><a href="https://autocode.com/notedwin/app/" target="blank">Autocode Apps</a></li>
                </ul>
              </div>
              <div className="flex-col relative m-5">
                <h4 className="font-sans font-bold text-xl dark:text-cyan-500">Legal</h4>
                <ul className="list-none text-sm">
                  <li className="dark:text-white"><a href="https://notedwin.co/privacy-policy" target="blank">Privacy Policy</a></li>
                  <li className="dark:text-white"><a href="mailto:privacy@notedwin.co">Privacy Concerns</a></li>
                </ul>
              </div>
              <div className="flex-col relative m-5">
                <h4 className="font-sans font-bold text-xl dark:text-cyan-500">Contact</h4>
                <ul className="list-none text-sm">
                  <li className="dark:text-white"><a href="mailto:info@notedwin.co">info@notedwin.co</a></li>
                </ul>
              </div>
            </div>
            <div className="justify-center">
              <a className="mx-5 mb-5 dark:text-white" href="https://youtube.com/@NotEdwinOfficial" target="blank"><SiYoutube /></a>

              <a className="mx-5 mb-5 dark:text-white" href="https://instagram.com/edwin.ngggggggg" target="blank"><SiInstagram /></a>

              <a className="mx-5 mb-5 dark:text-white" href="https://github.com/Edwin15857" target="blank"><SiGithub /></a>
            </div>
          </div>
        </footer>
      </main >
    </div >
  )
}
