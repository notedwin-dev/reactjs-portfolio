
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import robot from '../public/robot.png';
import Footer from '../components/footer';
import Image from 'next/image';


export default function Home() {



  const getStorage = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("locale") || null
    }
  }

  const [language, setLanguage] = useState(getStorage)

  useEffect(() => {
    if (localStorage.locale === 'en') {
      setTimeout(setLanguage('en'), 5000)
    } else if (localStorage.locale === 'zh') {
      setLanguage('zh')
    } else if (!('locale' in localStorage)) {
      setLanguage(null)
    }
  }, [])

  useEffect(() => {
    if (language === 'zh') {
      localStorage.locale = 'zh'
      window.location.href = `/${language}/`
    } else if (language === 'en') {
      setTimeout(window.location.href = `/${language}/`, 5000)
    }
  }, [language])

  return (
    <div>
      <Head>
        <title>Edwin Ng&apos;s Portfolio</title>
        <meta name="description" content="A Next.js Portfolio built by and built for Edwin Ng, aka NotEdwin." />
        <meta property="og:image" content="/me.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-slate-800">
        <section className="px-10">
          <Nav icons="Project" />
        </section>
        <section className='min-h-screen text-center mx-auto mt-40'>
          <div>
            <Image src={robot} width={250} height={250} alt=""></Image>
            <h1 className='font-bold text-2xl mb-5 text-blue-400 dark:text-blue-300'>Welcome to my Portfolio Website!</h1>
            <h1 className='font-bold text-2xl mb-10 text-blue-400 dark:text-blue-300'>Please select your preferred language.</h1>
            <h1 className='font-bold text-2xl mb-5 text-red-400'>欢迎来到我的作品集网页！</h1>
            <h1 className='font-extrabold text-2xl mb-10 text-red-400'>请选择您的首选语言</h1>
          </div>
          <div>
            <button className="p-2 text-white bg-blue-400 shadow-2xl rounded-md lg:mx-5 hover:bg-sky-300 " onClick={() => {
              setLanguage(language === 'zh' ? 'en' : 'en');
              window.location.href = '/en'
            }}>English (en-US)</button>
            <button className="p-2 text-white bg-red-400 shadow-2xl rounded-md lg:mx-5 hover:bg-red-300" onClick={() => {
              setLanguage(language === 'en' ? 'zh' : 'zh');
              window.location.href = "/zh"
            }
            }>中文简体 (zh-CN)</button>
            <button className="p-2 text-white bg-gray-400 shadow-2xl rounded-md lg:mx-5" onClick={() => {
              return
            }}>[制作中 - Making] 中文繁体 (zh-TW)</button>
          </div>
          <div className="my-10">
            <h2 className="text-2xl dark:text-white">After you have selected your preferred language, this website will automatically be displayed in the language of your choice for easier reading.</h2>
            <h2 className="text-2xl dark:text-white">当你选择了您的首选语言后，本网站将会自动以您选择的语言展示出来，以便阅读。</h2>
          </div>
        </section >

        <Footer />
      </main >
    </div >
  )
}

