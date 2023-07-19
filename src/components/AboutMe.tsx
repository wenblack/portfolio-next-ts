import Image from "next/image";
import avatarImg from'@/assets/1683386257269.png'
export function AboutMe () {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-800 font-bold mb-4">Who Am I?</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <Image src={avatarImg} width={200}height={200} alt="Profile Image" className="rounded-full w-48 h-48 mx-auto md:mx-0 mb-4 md:mr-4" />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600">Hi there! I&apos;m [Your Name], a passionate Front-End Developer with a keen eye for detail and a love for clean, elegant code. With [X] years of experience in web development, I specialize in crafting delightful user interfaces using modern web technologies.</p>
            <p className="text-gray-600 mt-4">My journey in web development began [mention your background and experience]. Throughout my career, I have honed my skills in React.js, Next.js, and TypeScript, allowing me to create responsive and performant web applications.</p>
            <p className="text-gray-600 mt-4">When I&apos;m not coding, you can find me exploring the latest trends in web design, attending tech conferences, and experimenting with new technologies. I am a strong believer in continuous learning and always strive to stay up-to-date with the ever-evolving web development landscape.</p>
            <div className="flex flex-wrap mt-4">
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 md:mb-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Twitter
              </a>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 md:mb-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                GitHub
              </a>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 md:mb-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

