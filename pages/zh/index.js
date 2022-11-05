//Main File located at http://localhost:3000/zh/

import Head from 'next/head';
import Nav from '../../components/zh/nav';
import About from '../../components/zh/about';
import { BsCodeSlash } from 'react-icons/bs';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { SiCsharp, SiDiscord, SiExpress, SiGit, SiHeroku, SiIntellijidea, SiJava, SiJavascript, SiMongodb, SiNextdotjs, SiPython, SiReact, SiReplit, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si';
import { MdOutlineWeb } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { BiCodeBlock } from 'react-icons/bi';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import Footer from '../../components/zh/footer';
import Projects from '../../components/zh/projects';


export default function Home() {
    let cards = "text-center shadow-xl bg-gradient-to-b from-sky-100 to-slate-100 shadow-sky-200 p-10 rounded-xl my-10 dark:shadow-sky-700 dark:from-sky-200 dark:to-slate-200"
    let tag = "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400"

    return (
        <div>
            <Head>
                <title>Edwin Ng的作品集</title>
                <meta name="description" content="A Next.js Portfolio built by and built for Edwin Ng, aka NotEdwin." />
                <meta property="og:image" content="/me.jpg" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white dark:bg-slate-800">
                <section className="min-h-screen px-10">
                    <Nav icons="Project" />
                    <About />
                </section>

                <section className='h-auto px-10'>
                    <div className="text-center">
                        <h2 id="skills" className="font-sans font-semibold text-3xl py-2 text-blue-gray-100 dark:text-cyan-500">技能</h2>
                        <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">以下是我擅长且较熟悉的一些<span className="text-blue-gray-100 dark:text-cyan-500">技术</span>，<span className="text-blue-gray-100 dark:text-cyan-500">编程语言</span>以及<span className="text-blue--100 dark:text-cyan-500">工具</span>。</p>
                    </div>

                    <div className="lg:flex gap-8">

                        <div className={cards}>
                            <IoLogoNodejs className="mx-auto text-5xl text-green-500" />
                            <h2 className="font-bold text-blue-400 dark:text-green-600">Node.js</h2>
                            <p>Node.js 是一个开源、跨平台的后端 JavaScript 运行环境。Node.js可透过JavaScript和一系列模块来编写服务器端应用和网络相关的应用。</p>
                            <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">使用工具</h2>
                            <div className={tag}><BiCodeBlock className='mr-1' /> Autocode</div>
                            <div className={tag}><AiFillGithub className="mr-1" /> GitHub</div>
                            <div className={tag}><SiGit className="mr-1" /> Git</div>
                            <div className={tag}><SiReplit className='mr-1' /> Replit</div>
                            <div className={tag}><SiHeroku className='mr-1' /> Heroku</div>
                            <div className={tag}><SiVisualstudiocode className="mr-1" /> Visual Studio Code</div>
                            <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">擅长的JavaScript模块</h2>
                            <div className={tag}><SiReact className="mr-1" /> React.js</div>
                            <div className={tag}><SiNextdotjs className="mr-1" /> Next.js</div>
                            <div className={tag}><SiDiscord className='mr-1' /> Discord.js</div>
                            <div className={tag}><SiMongodb className="mr-1" /> MongoDB</div>
                            <div className={tag}><SiExpress className="mr-1" /> Express.js</div>
                            <div className={tag}><SiJavascript className='mr-1' /> jimp</div>
                            <div className={tag}><SiJavascript className='mr-1' /> lib</div>
                            <div className={tag}><SiJavascript className='mr-1' /> node-fetch</div>
                            <div className={tag}><SiJavascript className='mr-1' /> canvas</div>
                            <div className={tag}><SiJavascript className='mr-1' /> ws</div>
                            <div className={tag}><SiJavascript className='mr-1' /> axios</div>
                        </div>

                        <div className={cards}>
                            <BsCodeSlash className="mx-auto text-5xl text-blue-600" />
                            <h2 className="font-bold text-blue-400 dark:text-blue-700">编程语言</h2>
                            <p>编程语言是一种能够让程序员准确地定义计算机所需要使用数据的计算机语言，并精确地定义在不同情况下所应当采取的行动。</p>
                            <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">使用工具</h2>
                            <div className={tag}><BiCodeBlock className='mr-1' /> Autocode</div>
                            <div className={tag}><AiFillGithub className="mr-1" /> Github</div>
                            <div className={tag}><SiGit className='mr-1' /> Git</div>
                            <div className={tag}><SiReplit className='mr-1' /> Replit</div>
                            <div className={tag}><SiHeroku className='mr-1' /> Heroku</div>
                            <div className={tag}><SiIntellijidea className='mr-1' /> IntelliJ</div>
                            <div className={tag}><SiVisualstudiocode className='mr-0.5' /> Visual Studio Code</div>
                            <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">我熟悉的编程语言</h2>
                            <div className={tag}><SiJavascript className='mr-1' /> JavaScript</div>
                            <div className={tag}><SiJava className='mr-1' /> Java</div>
                            <div className={tag}><SiTypescript className='mr-1' /> TypeScript</div>
                            <div className={tag}><SiCsharp className='mr-1' /> C#</div>
                            <div className={tag}><SiPython className='mr-1' /> Python</div>
                        </div>

                        <div className={cards}>
                            <MdOutlineWeb className="mx-auto text-5xl text-yellow-500" />
                            <h2 className="font-bold text-blue-400 dark:text-yellow-600">网页开发</h2>
                            <p>网页开发指的是网站的创建、构建和维护。 它包括网页设计、网页发布、网页编程和数据库管理等方面。</p>
                            <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">Tools</h2>
                            <div className={tag}><BiCodeBlock className='mr-1' /> Autocode</div>
                            <div className={tag}><AiFillGithub className="mr-1" /> Github</div>
                            <div className={tag}><SiGit className="mr-1" /> Git</div>
                            <div className={tag}><SiReplit className='mr-1' /> Replit</div>
                            <div className={tag}><SiHeroku className='mr-1' /> Heroku</div>
                            <div className={tag}><SiVisualstudiocode className="mr-1" /> Visual Studio Code</div>
                            <h2 className="font-semibold text-cyan-500 my-2 dark:text-cyan-600">擅长技术</h2>
                            <div className={tag}><SiReact className="mr-1" /> React.js</div>
                            <div className={tag}><SiNextdotjs className="mr-1" /> Next.js</div>
                            <div className={tag}><SiTailwindcss className="mr-1" /> Tailwind CSS</div>
                            <div className={tag}><SiMongodb className="mr-1" /> MongoDB</div>
                            <div className={tag}><SiExpress className="mr-1" /> Express.js</div>
                            <div className={tag}><AiFillHtml5 className='mr-1' /> HTML</div>
                            <div className={tag}><IoLogoCss3 className='mr-1' /> CSS</div>
                            <div className={tag}><IoLogoJavascript className="mr-1" /> JavaScript</div>
                            <div className={tag}><TbApi className="mr-1" /> REST API</div>
                        </div>
                    </div>
                </section>

                <section className='mx-20 project-grid'>
                    <div className="text-center">
                        <h2 id="projects" className="font-sans font-semibold text-3xl py-2 text-blue-gray-100 dark:text-cyan-500">作品</h2>
                        <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">本节介绍了一些我过去所完成的一些优秀的作品！</p>
                        <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">你可以点击<a href="/zh/projects"><span className="text-blue-gray-100 dark:text-cyan-500">这里</span></a>进入到作品集里参考或访问我所有的作品！</p>
                    </div>
                    <Projects />
                </section >
                <Footer />
            </main >
        </div >
    )
}
