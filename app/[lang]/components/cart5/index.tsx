import { I18N } from "@/app/i18n/i18n.interface";

export default function Cart5Component(props: { t: I18N }) {
    const t = props.t;

    return (
        <>
            <div className="card col-span-12 md:col-span-4 lg:col-span-1 lg:col-start-2 md:row-span-4 lg:row-span-2 center">
                <div className="flex justify-between text-justify w-full h-full">
                    <div className="flex flex-col justify-between">
                        <h1 className="text-sm">
                            {t['card5.title']}
                        </h1>
                        <p className="text-lg font-bold">
                            {t['card5.paragraph1']}
                        </p>
                    </div>

                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF9A25]"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EF9A25] opacity-75"></span>
                    </span>
                </div>
            </div>
        </>
    );
}