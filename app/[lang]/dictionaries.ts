import 'server-only';

import { SupportedLanguages, I18N } from "@/app/i18n/i18n.utils";

const dynamicDictionaries = SupportedLanguages.reduce((acc, { code }) => {
    acc[code] = () => import(`@/app/i18n/${code}.json`).then(module => module.default);
    return acc;
}, {} as { [key: string]: () => Promise<I18N> });

export const getDictionary = async (locale: string) => dynamicDictionaries[locale]();
