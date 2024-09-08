const year = new Date().getFullYear();

export default function Cart8Component() {
    return (
        <>
            <div className="card col-span-12 md:col-span-4 lg:col-span-1 center text-center text-xs">
                <h1>
                    <span className="myTextGradient">ManghiDev</span> · <span className="mtTextGradientReverse">{year}</span>
                </h1>
            </div>
        </>
    );
}