import React from 'react';
import { SiInstagram, SiYoutube, SiGithub } from 'react-icons/si'

export default function Footer() {
    return (
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
                        <h4 className="font-sans font-bold text-xl dark:text-cyan-500">Development</h4>
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
    )
}
