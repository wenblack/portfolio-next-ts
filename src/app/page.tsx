import React from 'react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Project} from '@/components/Project';
import { AboutMe } from '@/components/AboutMe';

const App = () => {
  return (
    <div className=' flex flex-col justify-between min-h-screen'>
      <Header />
      <header className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-800 font-bold">Let's create remarkable web experiences together!"</h2>
          <p className="text-gray-600 mt-4">
          Hello there! I'm a passionate Front-End Developer in production environment.  Currently focused on mastering React.js, Next.js, and TypeScript, I am continuously expanding my skill set to deliver top-notch user interfaces.  Let's create remarkable web experiences together!
          </p>
          <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</a>
        </div>
      </header>
      <AboutMe/>
      <Project />
      <Footer />
    </div>
  );
};


export default App;
