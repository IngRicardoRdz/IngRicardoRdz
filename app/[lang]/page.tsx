
import Cart1Component from "./components/cart1";
import Cart2Component from "./components/cart2";
import Cart3Component from "./components/cart3";
import Cart4Component from "./components/cart4";
import Cart5Component from "./components/cart5";
import Cart6Component from "./components/cart6";
import Cart7Component from "./components/cart7";
import Cart8Component from "./components/cart8";

import LanguagePickerComponent from "./components/languagePicker";

import { getDictionary } from "./dictionaries";

export default async function HomePage({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <>
      <main className="h-screen md:center py-0">
        <div className="font-bold grid grid-cols-12 lg:grid-cols-[repeat(4,minmax(0,300px))] gap-4 lg:grid-rows-[repeat(8,minmax(0,60px))] p-5 lg:p-0">
            <Cart1Component t={ t }/>
            <Cart2Component t={ t }/>
            <Cart3Component t={ t }/>
            <Cart4Component t={ t }/>
            <Cart5Component t={ t }/>
            <Cart6Component />
            <Cart7Component t={ t }/>
            <Cart8Component />
            <LanguagePickerComponent lang={ lang } />
        </div>
      </main>
    </>
  );
}
