import getConfig from 'next/config';

const year = new Date().getFullYear();

export default function Cart8Component() {
    const { publicRuntimeConfig } = getConfig();

    return (
        <>
            <div id="dataProject" className="card col-span-12 md:col-span-4 lg:col-span-1 center text-center text-xs">
                <h1>
                    <span className="myTextGradient">ManghiDev {year}</span> · <span className="mtTextGradientReverse">v{publicRuntimeConfig.version}</span>
                </h1>
            </div>
        </>
    );
}