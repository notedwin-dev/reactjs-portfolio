import React, { useState, useEffect } from 'react'
import { BsFillMoonStarsFill, BsFillFolderFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
//import { HiCodeBracketSquare } from 'react-icons/hi2';
import Link from 'next/link';
import ToolTip from '../Tooltip';

export default function Nav(icons) {
    const [darkMode, setDarkMode] = useState(null);

    let icon;
    if (icons.icons === "Home") {
        icon = <ToolTip tooltip='回到主页'>
            <Link href="/zh/">
                <AiFillHome className="cursor-pointer text-3xl mx-5 dark:fill-white" > </AiFillHome>
            </Link>
        </ToolTip>
    } else if (icons.icons === "Project") {
        icon =
            <ToolTip tooltip="作品集目录">
                <Link href="/zh/projects">
                    <BsFillFolderFill className="cursor-pointer text-3xl dark:fill-white mx-5" ></BsFillFolderFill>
                </Link>
            </ToolTip>
    }

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
        <nav className="pt-10 mb-12 flex justify-between" >
            <h1 className="text-xl font-burtons dark:text-white mr-5" > Edwin Ng </h1>
            <ul className="flex items-center" >
                <li>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")} className="cursor-pointer text-2xl dark:fill-yellow-300" />
                </li>
                <li>
                    {icon}
                </li>
                <li>
                    <a className="bg-gradient-to-r from-blue-400 to-cyan-600 text-white px-4 py-2 rounded-md" href="https://github.com/Edwin15857/reactjs-portfolio/raw/main/pages/Edwin-Ng-Resume.pdf" > 简历 </a>
                </li>
            </ul>
        </nav>
    )

}