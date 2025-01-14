'use client'

import Image from "next/image";

import { I18N } from "@/app/i18n/i18n.utils";

import { useState, useEffect } from 'react';

export default function Cart3Component(props: { t: I18N }) {
    const t = props.t;

    const [show, setShow] = useState(0);

    useEffect(() => {
        const random = Math.floor(Math.random() * 1000) % 2 === 0;

        setShow(random ? 1 : 2);
    }, []);

    return (
        <>
            <div id="letsWork" className="card col-span-12 md:col-span-4 lg:col-span-1 row-span-8 lg:row-span-4 text-wrap truncate">
                <div className="flex flex-col justify-around w-full h-full">
                    {
                        show === 1 && <>
                            <h1 className="text-xl text-center pb-4 mtTextGradientReverse">
                                <strong className="myTextGradient">{t['card3.title1']}</strong><strong className="mtTextGradientReverse">{t['card3.title2']}</strong>
                            </h1>
                            <p className="text-center md:text-justify">
                                {t['card3.paragraph1']}
                            </p>
                        </>
                    }
                    {
                        show === 2 && <>
                            <div className="flex justify-center">
                                <Image className="w-40" src={'https://music-profile.rayriffy.com/theme/light.svg?uid=000102.207899e3f0ed47caa256a0f255dc22ba.1703'} priority={false} height={0} width={0} alt="AppleMusic" />
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}