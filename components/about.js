import me from '../public/me.jpg';
import Autocode from '../public/autocode.svg';
import Image from 'next/image';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';


export default function About() {

    return (
        <section className="min-h-screen px-10">

            <div className="flex justify-center items-center mx-auto mt-20">
                <Image src={me} className="mx-auto rounded-full w-80 h-80" alt='' />
            </div>
            <div className="text-center p-10">
                <h2 className="font-sans text-5xl py-2 text-blue-gray-100 dark:text-cyan-500">Edwin Ng</h2>
                <h3 className="font-sans text-2xl py-2 text-black dark:text-white">Back-End Developer and University Student.</h3>
                <p className="font-sans leading-8 text-gray-600 dark:text-gray-300">Currently working on multiple Github Repositories such as discord-ws and autocode-discordjs.</p>
            </div>
            <div className="text-3xl flex justify-center gap-10">
                <a href='https://autocode.com/notedwin' target="blank"><Image src={Autocode} alt="" /></a>

                <a href="https://github.com/Edwin15857" target="blank"><AiFillGithub className="dark:fill-white" /></a>

                <a href="https://www.linkedin.com/in/edwin-ng-1aa705210" target="blank"><AiFillLinkedin className="dark:fill-white" /></a>

                <a href="https://link.notedwin.co/tutorials-youtube" target="blank"><AiFillYoutube className="dark:fill-white" /></a>

            </div>
        </section>
    )
}