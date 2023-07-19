import Image from "next/image";
import avatarImg from'@/assets/1683386257269.png'
export function AboutMe () {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4  ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4 mt-8">
            <Image src={avatarImg} width={200}height={200} alt="Profile Image" className="rounded-full w-48 h-48 mx-auto md:mx-0 mb-4 md:mr-4" />
          </div>
        </div>
        <span className="text-purple-500 text-xl">Who i am</span>
        <h2 className="text-3xl text-white mt-2 font-bold mb-4">Wender Barbosa</h2>
        <h4 className=" text-lg text-gray-300">Frontend Developer </h4>
          <div className="md:w-1/2 mt-8">
            <p className="text-slate-300 text-justify">Hello there! I&apos;m passionate Front-End Developer in production environment.  Currently focused on mastering React.js, Next.js, and TypeScript, I&apos;m continuously expanding my skill set to deliver top-notch user interfaces.  Let&apos;s create remarkable web experiences together!</p>
            <div className="flex flex-wrap mt-4">
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 md:mb-0 bg-[#4338CA] hover:opacity-70  text-white font-bold py-2 px-4 rounded">
                Twitter
              </a>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 md:mb-0 bg-[#4338CA] hover:opacity-70  text-white font-bold py-2 px-4 rounded">
                GitHub
              </a>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 md:mb-0 bg-[#4338CA] hover:opacity-70  text-white font-bold py-2 px-4 rounded">
                LinkedIn
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

