'use client'

import { useEffect } from 'react';

import { I18N } from '@/app/i18n/i18n.utils';

import confetti from 'canvas-confetti';

export default function Cart7Component(props: { t: I18N }) {
    const t = props.t;

    const messages = t['card7.words'].split(',');

    useEffect(() => {
        let randomMessage = messages[Math.floor(Math.random() * messages.length)];

        const button = document.getElementById('easterEgg')!;
        const random = messages[Math.floor(Math.random() * messages.length)];

        button.addEventListener('click', () => {
            if (randomMessage === random) {
                return document.getElementById('randomMessage')!.innerHTML = '🥭';
            }

            const rect = button.getBoundingClientRect();

            confetti({
                spread: 150,
                origin: {
                    x: (rect.left + rect.width / 2) / window.innerWidth,
                    y: (rect.top + rect.height / 2) / window.innerHeight
                },
                particleCount: 100,
                colors: [
                    '#FFD700',
                    '#FFA500',
                    '#FF8C00',
                    '#FF7F50',
                    '#FF6347',
                    '#FF4500',
                    '#FF0000',
                    '#DC143C',
                    '#B22222',
                    '#8B0000',
                ],
            });

            randomMessage = messages[Math.floor(Math.random() * messages.length)];
            document.getElementById('randomMessage')!.innerHTML = randomMessage;
        });
    });

    return (
        <>
            <div id="easterEgg" className="card text-center col-span-12 md:col-span-4 lg:col-span-1 lg:row-span-1 center hover:cursor-pointer hover:text-mango3">
                <span id="randomMessage">
                    👾
                </span>
            </div>
        </>
    );
}