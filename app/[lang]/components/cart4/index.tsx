'use client'

import { useEffect } from 'react';

import { I18N } from '@/app/i18n/i18n.utils';

export default function Cart4Component(props: { t: I18N }) {
    const t = props.t;

    useEffect(() => {
        const element = document.getElementById('time');

        const updateTime = () => {
            let time = '';

            const dateUTC = new Date().toUTCString();
            const date = new Date(dateUTC.replace('GMT', ''));
            const newDate = new Date(date.getTime() - (6 * 60 * 60 * 1000));
            time = newDate.getHours() + ':' + newDate.getMinutes().toString().padStart(2, '0') + ':' + newDate.getSeconds().toString().padStart(2, '0');
            time += newDate.getHours() >= 12 ? ' PM' : ' AM';

            element!.innerText = time;
        }

        updateTime();

        setInterval(() => updateTime(), 1000);
    }, []);

    return (
        <>
            <div className="card col-span-12 md:col-span-4 lg:col-span-2 row-span-4 lg:row-span-2">
                <div className="flex flex-col justify-between w-full h-full">
                    <h1 className="text-2xl">
                        <strong className="mtTextGradientReverse">{t['card4.title']}</strong>
                    </h1>
                    <p className="text-2xl md:text-4xl text-center">
                        <span id="time"></span>
                    </p>
                </div>
            </div>
        </>
    );
}
