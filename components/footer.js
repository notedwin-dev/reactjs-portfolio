import React from "react";
import Link from "next/link";
import { SiInstagram, SiYoutube, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="md:h-40 lg:h-40">
      <div className="rounded-xl items-center flex justify-center h-40">
        <div className="flex flex-wrap m-15">
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              Quick Links
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="/en/projects">Project Directory</Link>
              </li>
              <li className="dark:text-white">
                <Link href="https://notedwin.co" target="blank">
                  Portfolio Website
                </Link>
              </li>
              <li className="dark:text-white">
                <Link href="https://fiverr.com/edwin_2004" target="blank">
                  Fiverr
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              Development
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="https://github.com/notedwin-dev" target="blank">
                  GitHub
                </Link>
              </li>
              <li className="dark:text-white">
                <Link
                  href="https://link.notedwin.co/tutorials-youtube"
                  target="blank"
                >
                  YouTube
                </Link>
              </li>
              <li className="dark:text-white">
                <Link
                  href="https://autocode.com/notedwin/snippets/"
                  target="blank"
                >
                  Autocode Snippets
                </Link>
              </li>
              <li className="dark:text-white">
                <Link
                  href="https://autocode.com/notedwin/template/"
                  target="blank"
                >
                  Autocode Templates
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              Legal
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="https://notedwin.co/privacy-policy" target="blank">
                  Privacy Policy
                </Link>
              </li>
              <li className="dark:text-white">
                <Link
                  href="https://notedwin.co/terms-and-conditions"
                  target="blank"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="dark:text-white">
                <Link href="mailto:privacy@notedwin.co">Privacy Concerns</Link>
              </li>
            </ul>
          </div>
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              Contact
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="mailto:info@notedwin.co">info@notedwin.co</Link>
              </li>
              <li className="dark:text-white">
                <Link href="mailto:collabs@notedwin.co">
                  collabs@notedwin.co
                </Link>
              </li>
              <li className="dark:text-white">
                <Link href="https://discordapp.com/users/">Discord DMs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="justify-center">
          <Link
            className="mx-5 mb-5 dark:text-white"
            href="https://youtube.com/@NotEdwinOfficial"
            target="blank"
          >
            <SiYoutube />
          </Link>

          <Link
            className="mx-5 mb-5 dark:text-white"
            href="https://instagram.com/edwin.ngggggggg"
            target="blank"
          >
            <SiInstagram />
          </Link>

          <Link
            className="mx-5 mb-5 dark:text-white"
            href="https://github.com/Edwin15857"
            target="blank"
          >
            <SiGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
