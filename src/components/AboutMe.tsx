import Image from "next/image";
import avatarImg from'@/assets/1683386257269.png'
import gitHubLogo from '@/assets/gh.svg'
import linkedInLogo from '@/assets/linkedin.svg'

export function AboutMe () {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6 py-1  ">
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
              <a href="https://www.example.com"  target="_blank" rel="noopener noreferrer" className="mr-4 px-6 py-1 mb-2 md:mb-0 bg-[#986DFF] hover:opacity-70  text-white font-bold rounded">
                <Image className="bg-[#986DFF]" alt="LinkedIn Logo" width={25} height={25} src={linkedInLogo}/>
              </a>
              <a href="https://www.example.com"  target="_blank" rel="noopener noreferrer" className="mr-4 px-6 py-1 mb-2 md:mb-0 bg-[#986DFF] hover:opacity-70  text-white font-bold rounded">
              <Image  className="bg-[#986DFF]" alt="GitHub Logo" width={25} height={25} src={gitHubLogo}/>
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

