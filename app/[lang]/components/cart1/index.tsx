import Image from "next/image";

import { I18N } from "@/app/i18n/i18n.interface";

import memoji from "../../../manghidev-memoji.webp";
import logo from "../../../manghidev-logo.webp";

export default function Cart1Component(props: { t: I18N }) {
    const t = props.t;

    return (
        <>
            <div className="card col-span-12 lg:col-span-3 lg:row-span-4 group">
                <div className="flex w-full h-full">
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex flex-col h-full text-justify">
                            <div className="text-2xl">
                                <h1>
                                    {t['card1.greeting']}
                                    <strong className="myTextGradient font-bold">Ricardo</strong>.
                                </h1>
                                <p className="my-2">
                                    {t['card1.description']}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-normal gap-4">
                            <a href="https://www.linkedin.com/in/rial-rova/" target="_blank" className="socialButton hover:text-[#0E76A8]" id="linkedin" aria-label="Linkedin">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>
                            </a>
                            <a href="https://github.com/manghidev" target="_blank" className="socialButton hover:text-[#6E5494]" id="github" aria-label="GitHub">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
                            </a>
                            <a href="https://instagram.com/manghi.dev" target="_blank" className="socialButton hover:text-[#C13584]" id="instagram" aria-label="Instagram">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
                            </a>
                            <a href="https://x.com/manghidev" target="_blank" className="socialButton hover:text-[#00ACEE]" id="x" aria-label="Twitter/X">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" /></svg>
                            </a>
                            <a href="https://t.me/manghidev" target="_blank" className="socialButton hover:text-[#24A1DE]" id="telegram" aria-label="Telegram">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" fill="currentColor" /></svg>
                            </a>
                            <a href="mailto:contact@manghi.dev" className="socialButton hover:text-[#EF9A25]" id="mail" aria-label="Mail">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className="relative w-1/2 hidden md:block">
                        <div className="absolute w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-100 group-hover:opacity-0 z-20">
                            <Image src={memoji} className="object-contain" style={{ width: '100%', height: '100%', }} priority={true} alt={'memoji'} />
                        </div>
                        <div className="relative w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 z-10">
                            <Image src={logo} className="object-contain" style={{ width: '100%', height: '100%', }} alt={'logo'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}