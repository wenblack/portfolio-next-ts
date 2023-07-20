import React from 'react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Project} from '@/components/Project';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';
import { SoftSkills } from '@/components/SoftSkills';

const App = () => {
  return (
    <div className=' flex flex-col justify-between min-h-screen'>
      <Header />
      <header className="py-8">
        <div className="flex flex-col gap-8 items-center justify-center mx-auto px-4 h-[80vh]">
          <h2 className="text-3xl  font-bold">Let&apos;s create remarkable web experiences together!</h2>
          <p className="text-slate-400 mt-4">
          Trying to create captivating user experiences that combine aesthetics and functionality
          </p>
          <a href="#" className="mt-4 inline-block bg-purple-600 hover:opacity-70 text-white font-bold py-2 px-4 rounded">Learn More</a>
        </div>
      </header>
      <AboutMe/>
      <Project />
      <SoftSkills/>
      <Skills/>
      <Footer />
    </div>
  );
};


export default App;
