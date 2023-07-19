import htmlIcon from "@/assets/html.svg"
import cssIcon from "@/assets/css.svg"
import jsIcon from "@/assets/javascript.svg"
import gitIcon from "@/assets/github.svg"
import reactIcon from "@/assets/react.svg"
import nextIcon from "@/assets/next-js.svg"
import tsIcon from "@/assets/typescript.svg"
import tailWindIcon from "@/assets/tailwindcss.svg"

import Image from "next/image";

export function Skills ()  {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-200 font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className=" flex items-center justify-center  border-indigo-500 p-4 border rounded">
            <Image alt="Html 5 Icon" src={htmlIcon} width={60} height={60}></Image>
          </div>
          <div className=" flex items-center justify-center  border-indigo-500 p-4 border rounded">
            <Image alt="Html 5 Icon" src={cssIcon} width={60} height={60}></Image>
          </div>
          <div className=" flex items-center justify-center  border-indigo-500 p-4 border rounded">
            <Image alt="Html 5 Icon" src={gitIcon} width={60} height={60}></Image>
          </div>
          <div className=" flex items-center justify-center  border-indigo-500 p-4 border rounded">
            <Image alt="Html 5 Icon" src={jsIcon} width={60} height={60}></Image>
          </div>
          <div className=" flex items-center justify-center  border-indigo-500 p-4 border rounded">
            <Image alt="Html 5 Icon" src={reactIcon} width={60} height={60}></Image>
          </div>
          <div className=" flex items-center justify-center  border-indigo-500 p-4 border rounded">
            <Image alt="Html 5 Icon" src={nextIcon} width={60} height={60}></Image>
          </div>
          <div className=" flex items-center justify-center  border-indigo-500 p-4 border rounded">
            <Image alt="Html 5 Icon" src={tsIcon} width={60} height={60}></Image>
          </div>
          <div className=" flex items-center justify-center  border-indigo-500 p-4 border rounded">
            <Image alt="Html 5 Icon" src={tailWindIcon} width={60} height={60}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
