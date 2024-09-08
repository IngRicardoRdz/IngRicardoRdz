import { I18N } from "@/app/i18n/i18n.interface";

export default function Cart3Component(props: { t: I18N }) {
    const t = props.t;

    return (
        <>
            <div className="card col-span-12 md:col-span-4 lg:col-span-1 row-span-8 lg:row-span-4 text-wrap truncate">
                <div className="flex flex-col justify-around w-full h-full">
                    <h1 className="text-xl text-center pb-4 mtTextGradientReverse">
                        <strong className="myTextGradient">{t['card3.title1']}</strong><strong className="mtTextGradientReverse">{t['card3.title2']}</strong>
                    </h1>
                    <p className="text-center md:text-justify">
                        {t['card3.paragraph1']}
                    </p>
                </div>
            </div>
        </>
    );
}