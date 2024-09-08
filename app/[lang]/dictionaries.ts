import 'server-only';

import { I18N } from "@/app/i18n/i18n.interface";

const dictionaries: { [key: string]: () => Promise<I18N> } = {
    'es-MX': () => import('../i18n/es-MX.json').then((module) => module.default),
    'en-US': () => import('../i18n/en-US.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]();