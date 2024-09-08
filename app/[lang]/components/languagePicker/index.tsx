'use client'

import { useState, useEffect } from 'react';

import { languages } from "../../../i18n/ui.util";

export default function LanguagePickerComponent(props: { lang: string }) {
    const lang = props.lang;

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            //* Cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return <>
        <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white transition-all duration-300 ease-in-out" style={{ transform: show ? 'translateY(0)' : 'translateY(100%)' }}>
            <ul id="menu" className="flex justify-around py-1">
                {
                    Object.entries(languages).map(([key, value]) => {
                        return <li key={key} id={key} className="cursor-pointer" onClick={() => reloadLang(key)}>
                            <strong className={key === lang ? 'myTextGradient' : 'text-gray-200'}>{value.name} </strong>
                            <span>{value.flag}</span>
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
