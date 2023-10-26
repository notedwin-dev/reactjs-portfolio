//Main File located at http://localhost:3000/en/projects

import React from "react";
import Head from "next/head";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import Projects from "../../../components/projects";
import { SiDiscord, SiGmail } from "react-icons/si";

export default function Portfolio() {
  let tag =
    "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400";

  return (
    <div>
      <Head>
        <title>Edwin Ng&apos;s Portfolio</title>
        <meta
          name="description"
          content="A Next.js Portfolio built by and built for Edwin Ng, aka NotEdwin."
        />
        <meta property="og:image" content="/me.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-slate-800">
        <section className="px-10">
          <Nav icons="Home" />
          <div className="text-center mx-10">
            <h1 className="font-bold text-2xl pb-5 text-blue-gray-100">
              Project Directory
            </h1>
            <p className="text-md dark:text-white mb-8">
              This is where all my past projects are displayed! Each project
              includes a short description about why it is created, what is the
              use of the project and how it will help new developers to learn
              coding faster without needing to waste long hours on watching
              tutorials. If you want to collab on a GitHub project, do contact
              me through{" "}
              <button
                onClick={() => {
                  window.location.href = "https://discordapp.com/users/";
                }}
              >
                <div className={tag}>
                  <SiDiscord className="mr-1" />
                  Discord
                </div>
              </button>
              or{" "}
              <button
                onClick={() => {
                  window.location.href = "mailto:collabs@notedwin.codes";
                }}
              >
                <div className={tag}>
                  <SiGmail className="mr-1" />
                  Gmail
                </div>
              </button>
              !
            </p>
          </div>
          <Projects />
        </section>
        <Footer />
      </main>
    </div>
  );
}
