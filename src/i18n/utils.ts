import { ui, defaultLang } from './ui';
import type { AstroCookies } from "astro";

export const getLangFromCookies = (cookies: AstroCookies) => {
    if (cookies.has('lang')) {
        return cookies.get('lang') as unknown as keyof typeof ui;
    }

    return defaultLang;
}

export const getLangFromStorage = (localStorage: Storage) => {
    if (typeof window !== 'undefined' && localStorage.getItem('lang')) {
        if (localStorage.getItem('lang')) {
            return localStorage.getItem('lang') as keyof typeof ui;
        } else {
            localStorage.setItem('lang', defaultLang);
            return defaultLang;
        }
    }

    return defaultLang;
}

export const useTranslations = (lang: keyof typeof ui, params: { [key: string]: string | number } = {}) => {
    return (key: keyof typeof ui[typeof lang]) => {
        let translation = ui[lang][key] as typeof ui[typeof lang][keyof typeof ui[typeof lang]];

        for (const [param, value] of Object.entries(params)) {
            translation = translation.replace(`${param}`, value.toString()) as typeof translation;
        }

        return translation;
    };
}
