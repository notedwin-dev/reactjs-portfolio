import React from 'react';
import { SiInstagram, SiYoutube, SiGithub } from 'react-icons/si'

export default function Footer() {
    return (
        <footer className="md:h-40 lg:h-40">
            <div class="  rounded-xl items-center flex justify-center h-40">
                <div className="flex flex-wrap m-15">
                    <div class="flex-col relative m-5">
                        <h4 className="font-sans font-bold text-xl dark:text-cyan-500">快捷链接</h4>
                        <ul className="list-none text-sm">
                            <li className="dark:text-white"><a href="https://notedwin.co" target="blank">HTML作品集</a></li>
                            <li className="dark:text-white"><a href="https://fiverr.com/edwin_2004" target="blank">服务</a></li>
                        </ul>
                    </div>
                    <div className="flex-col relative m-5">
                        <h4 className="font-sans font-bold text-xl dark:text-cyan-500">软件开发</h4>
                        <ul className="list-none text-sm">
                            <li className="dark:text-white"><a href="https://github.com/Edwin15857" target="blank">GitHub</a></li>
                            <li className="dark:text-white"><a href="https://link.notedwin.co/tutorials-youtube" target="blank">YouTube</a></li>
                            <li className='dark:text-white'><a href="https://autocode.com/notedwin/snippets/" target="blank">Autocode代码片段</a></li>
                            <li className='dark:text-white'><a href="https://autocode.com/notedwin/app/" target="blank">Autocode开源APP</a></li>
                        </ul>
                    </div>
                    <div className="flex-col relative m-5">
                        <h4 className="font-sans font-bold text-xl dark:text-cyan-500">法律声明</h4>
                        <ul className="list-none text-sm">
                            <li className="dark:text-white"><a href="https://notedwin.co/privacy-policy" target="blank">隐私权声明</a></li>
                            <li className="dark:text-white"><a href="mailto:privacy@notedwin.co">隐私疑问</a></li>
                        </ul>
                    </div>
                    <div className="flex-col relative m-5">
                        <h4 className="font-sans font-bold text-xl dark:text-cyan-500">联络我</h4>
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