'use client'

import { useEffect } from 'react';
import Image from "next/image";

import proyecta from "@/app/proyecta.webp";
import kinnil from "@/app/kinnil.webp";
import jade from "@/app/jade.webp";
import ox from "@/app/ox.webp";
import ignite from "@/app/ignite.webp";
import ezsort from "@/app/ezsort.webp";
import inbayt from "@/app/inbayt.webp";
import mpckpro from "@/app/mp-ck-pro.webp";

export default function Cart6Component() {
    useEffect(() => {
        const images = document.querySelectorAll('.carousel');
        let imgPosition = 0;
        const seconds = 2500;

        const links = [
            'https://proyecta.utch.edu.mx/',
            'https://kinnil.com/',
            'https://jadesmartcargo.com/',
            'https://www.oxlogistic.com/',
            'https://pidelectronics.com/ignite/',
            'https:///app.ezsort.tech/',
            'https://app.inbayt.com/',
            'https://www.mercadopago.com.mx/developers/panel/developer-program/certification/cert_9e0cfd395c0f11ef97813ad702707ec3',
        ];

        const updatePosition = () => {
            for (const img of images) {
                img.classList.remove('opacity-100');
                img.classList.add('opacity-0');
            }

            images[imgPosition].classList.remove('opacity-0');
            images[imgPosition].classList.add('opacity-100');
        };

        const nextImg = () => {
            imgPosition === images.length - 1 ? imgPosition = 0 : imgPosition++;

            updatePosition();
        }

        let interval = setInterval(nextImg, seconds);

        document.getElementById('projects')!.addEventListener('click', () => window.open(links[imgPosition], '_blank'));

        document.getElementById('projects')!.addEventListener('mouseover', () => clearInterval(interval));

        document.getElementById('projects')!.addEventListener('mouseout', () => interval = setInterval(nextImg, seconds));
    }, []);

    return (
        <>
            <div className="card col-span-12 md:col-span-4 lg:col-span-1 md:row-span-2 h-44 lg:h-full center hover:cursor-alias hover:text-mango3" id="projects">
                <div className="relative w-full">
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-100 z-20 carousel">
                        <Image src={proyecta} className="w-36" alt="Proyecta logo" />
                    </div>
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-0 z-20 carousel">
                        <Image src={kinnil} className="w-72" alt="Kinnil logo" />
                    </div>
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-0 z-20 carousel">
                        <Image src={jade} className="w-72" alt="JADE logo" />
                    </div>
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-0 z-20 carousel">
                        <Image src={ox} className="w-72" alt="OX logo" />
                    </div>
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-0 z-20 carousel">
                        <Image src={ignite} className="w-72" alt="Ignite logo" />
                    </div>
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-0 z-20 carousel">
                        <Image src={ezsort} className="w-72" alt="EZSort logo" />
                    </div>
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-0 z-20 carousel">
                        <Image src={inbayt} className="w-72" alt="InBayt logo" />
                    </div>
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700 opacity-0 z-20 carousel">
                        <Image src={mpckpro} className="w-40" alt="MP CheckOut Pro certification" />
                    </div>
                </div>
            </div>
        </>
    );
}