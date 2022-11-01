/**
 * It renders the page with the head, nav, about, skills, projects, and footer components
 * @returns A div with a main tag with a section tag with a nav tag with a li tag with an a tag with a
 * href attribute.
 */
import Head from 'next/head';
import Nav from '../components/nav';
import About from '../components/about';
import { BsCodeSlash } from 'react-icons/bs';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { SiCsharp, SiDiscord, SiGit, SiHeroku, SiIntellijidea, SiJava, SiJavascript, SiNextdotjs, SiPython, SiReact, SiReplit, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si';
import { MdOutlineWeb } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { BiCodeBlock } from 'react-icons/bi';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import Footer from '../components/footer';
import Projects from '../components/projects';


export default function Home() {
  let cards = "text-center shadow-xl bg-gradient-to-b from-sky-100 to-slate-100 shadow-sky-200 p-10 rounded-xl my-10 dark:shadow-sky-700 dark:from-sky-200 dark:to-slate-200"
  let tag = "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400"

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
          <Nav icons="Project" />
          <About />
        </section>

        <section className='h-auto px-10'>
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

        <section className='mx-20 project-grid'>
          <div className="text-center">
            <h2 id="projects" className="font-sans font-semibold text-3xl py-2 text-blue-gray-100 dark:text-cyan-500">Projects</h2>
            <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">This section features some of the amazing projects that I have done in the past!</p>
            <p>You can view all of my <a className="text-blue-gray-100 dark:text-cyan-500" href="/projects">projects here</a> in the projects directory!</p>
          </div>
          <Projects />
        </section >
        <Footer />
      </main >
    </div >
  )
}
