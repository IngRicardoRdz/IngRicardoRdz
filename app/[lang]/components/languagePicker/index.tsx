'use client'

import { useState, useEffect } from 'react';

import { SupportedLanguages } from "@/app/i18n/i18n.utils";

export default function LanguagePickerComponent(props: { lang: string }) {
    const lang = props.lang;

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const controlNavbar = () => {
                if (typeof window !== 'undefined') {
                    if (window.scrollY > lastScrollY) {
                        //* If scrolling down, hide the navbar
                        setShow(false);
                    } else {
                        //* If scrolling up, show the navbar
                        setShow(true);
                    }
        
                    //* Remember the current page location for the next move
                    setLastScrollY(window.scrollY);
                }
            };

            window.addEventListener('scroll', controlNavbar);

            //* Cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return <>
        <div className="fixed bottom-0 left-0 right-0 bg-dark bg-opacity-60 text-light transition-all duration-300 ease-in-out" style={{ transform: show ? 'translateY(0)' : 'translateY(100%)' }}>
            <ul id="menu" className="flex justify-around py-1">
                {
                    SupportedLanguages.map((data) => {
                        return <li key={data.code} id={data.code} className="cursor-pointer" onClick={() => reloadLang(data.code)}>
                            <strong className={data.code === lang ? 'myTextGradient' : 'text-light'}>{data.name} </strong>
                            <span>{data.flag}</span>
                        </li>;
                    })
                }
            </ul>
        </div>
    </>;
}

const reloadLang = (lang: string) => {
    window.location.href = `/${lang}`;
};
