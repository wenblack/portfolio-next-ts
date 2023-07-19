import Image from 'next/image';
import React from 'react';

export function Project  () {
  return (
    <section className="container mx-auto px-4  py-8">
      <h3 className="text-2xl text-white font-bold mb-4">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
      <div className=" p-4 flex  flex-col border border-red-500 rounded">
          <span className='text-xl'>👩‍💻</span>
          <a  href='' className="text-lg text-gray-100 font-bold">Project 2</a>
          <p className="text-slate-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis.</p>
        </div>

        
        <div className=" p-4 flex  flex-col border border-blue-500 rounded">
          <span className='text-xl'>💻</span>
          <a  href='' className="text-lg text-gray-100 font-bold">Project 2</a>
          <p className="text-slate-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis.</p>
        </div>

        
        <div className=" p-4 flex  flex-col border border-green-500 rounded">
          <span className='text-xl'>📱</span>
          <a  href='' className="text-lg text-gray-100 font-bold">Project 3</a>
          <p className="text-slate-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis.</p>
        </div>
      </div>
    </section>
  );
};

