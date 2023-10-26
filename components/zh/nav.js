import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillFolderFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
//import { HiCodeBracketSquare } from 'react-icons/hi2';
import Link from "next/link";
import ToolTip from "../Tooltip";
import { useRouter } from "next/router";

export default function Nav(icons) {
  const getStorage = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || null;
    }
  };

  const router = useRouter();

  let languageOptions = [
    {
      id: "zh",
      name: "ZH",
    },
    {
      id: "en",
      name: "EN",
    },
  ];

  const [userLanguage, setUserLanguage] = useState("");

  const handleLanguageChange = (e) => {
    setUserLanguage(e.target.value);
    router.push(`/${e.target.value}`);
  };

  const [darkMode, setDarkMode] = useState(getStorage);

  let icon;
  if (icons.icons === "Home") {
    icon = (
      <ToolTip tooltip="回到主页">
        <Link href="/zh/">
          <AiFillHome className="cursor-pointer text-3xl mx-5 dark:fill-white">
            {" "}
          </AiFillHome>
        </Link>
      </ToolTip>
    );
  } else if (icons.icons === "Project") {
    icon = (
      <ToolTip tooltip="作品集目录">
        <Link href="/zh/projects">
          <BsFillFolderFill className="cursor-pointer text-3xl dark:fill-white mx-5"></BsFillFolderFill>
        </Link>
      </ToolTip>
    );
  }

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (userLanguage) localStorage.locale = userLanguage;
  }, [userLanguage]);

  return (
    <nav className="pt-10 mb-12 flex justify-between">
      <button
        onClick={() => {
          window.location.href = "/en";
        }}
      >
        <h1 className="text-xl font-burtons dark:text-white mr-5">
          {" "}
          Edwin Ng{" "}
        </h1>
      </button>
      <ul className="flex items-center">
        <li className="pr-4">
          <select
            onChange={handleLanguageChange}
            value={userLanguage}
            defaultValue="ZH"
            className="bg-inherit text-black dark:text-white outline-none"
          >
            {languageOptions.map(({ id, name }) => (
              <option key={id} value={id} className="bg-inherit text-black">
                {name}
              </option>
            ))}
          </select>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")}
            className="cursor-pointer text-2xl dark:fill-yellow-300"
          />
        </li>
        <li>{icon}</li>
        <li>
          <Link
            className="bg-gradient-to-r from-blue-400 to-cyan-600 text-white px-4 py-2 rounded-md"
            href="https://github.com/Edwin15857/reactjs-portfolio/raw/main/pages/Edwin-Ng-Resume.pdf"
          >
            {" "}
            简历{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
