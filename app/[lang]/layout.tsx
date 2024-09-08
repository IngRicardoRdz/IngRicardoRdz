import type { Metadata } from "next";
import "../globals.css";

import { JetBrains_Mono } from 'next/font/google';

import { SupportedLanguages } from "@/app/i18n/i18n.utils";

const JetBrainsMono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "ManghiDev",
  authors: [{
    name: "ManghiDev",
  }],
  description: "With manghidev you will be able to bring your ideas to reality, with a professional team that will help you create your mobile or web project, from the initial idea to the launch.",
  keywords: ['ManghiDev', 'manghidev', 'manghi', 'dev', 'development', 'web', 'mobile', 'app', 'android', 'ios', 'design', 'programming', 'professional', 'team', 'ideas', 'reality', 'project', 'idea', 'launch', 'startup', 'start-up'],
};

export const generateStaticParams = async () => SupportedLanguages.map(({ code }) => ({ lang: code }));

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body className={`select-none text-back dark:text-light bg-light dark:bg-dark ${JetBrainsMono.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}
