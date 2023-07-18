import React from 'react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Project} from '@/components/Project';

const App = () => {
  return (
    <div className=' flex flex-col justify-between min-h-screen'>
      <Header />
      <header className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-800 font-bold">Welcome to WenBarbosa!</h2>
          <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis. Sed ultrices orci nec leo rutrum, id placerat felis aliquet.</p>
          <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</a>
        </div>
      </header>
      <Project />
      <Project />
      <Footer />
    </div>
  );
};

export default App;