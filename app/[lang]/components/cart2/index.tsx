import { I18N } from "@/app/i18n/i18n.utils";

const getExperience = (start: Date, end: Date) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    let diffYears = endDate.getFullYear() - startDate.getFullYear();
    const diffMonths = endDate.getMonth() - startDate.getMonth();
    const diffDays = endDate.getDate() - startDate.getDate();

    //* If the end date is before the start date, subtract one year
    if (diffMonths < 0 || (diffMonths === 0 && diffDays < 0)) diffYears--;

    return diffYears.toString();
};

export default function Cart2Component(props: { t: I18N }) {
    const t = props.t;

    return (
        <>
            <div id="technologies" className="card col-span-12 md:col-span-4 lg:col-span-1 md:row-span-10 lg:row-span-6 center">
                <div className="flex flex-col justify-around w-full h-full">
                    <h1 className="text-xl text-center">
                        <strong className="myTextGradient">
                            {t['card2.title']}
                        </strong>
                    </h1>

                    <p className="text-xs">
                        {implementText(t['card2.paragraph1'], ['{myExperience}'], [getExperience(new Date("2018-08-13"), new Date())])}
                    </p>
                    <p className="text-xs">
                        {t['card2.paragraph2']}
                    </p>
                    <ul className="text-xs list-disc pl-7">
                        <li>Angular</li>
                        <li>Astro</li>
                        <li>TailwindCSS</li>
                        <li>Flutter</li>
                        <li>Express.js</li>
                        <li>Docker</li>
                        <li>MP CheckOut Pro</li>
                        <li>AWS</li>
                        <li>
                            {t['card2.paragraph3']}
                        </li>
                    </ul>
                    <p className="text-xs">
                        {t['card2.paragraph4']}
                    </p>
                </div>
            </div>
        </>
    );
}

const implementText = (langText: string, params: [string], texts: [string]) => {
    let result = langText;

    for (let i = 0; i < params.length; i++) {
        result = result.replace(params[i], texts[i]);
    }

    return result;
};
