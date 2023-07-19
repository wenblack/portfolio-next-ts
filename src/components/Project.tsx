import Image from 'next/image';
import React from 'react';

export function Project  () {
  return (
    <section className="container mx-auto px-4 py-8">
      <h3 className="text-2xl text-gray-800 font-bold mb-4">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-white p-4 shadow rounded">
          <Image src="/asdas/asdasda.jpg" height={50} width={50} alt="Project 1" className="mb-4 rounded" />
          <h4 className="text-lg text-gray-800 font-bold">Project 1</h4>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis.</p>
        </div>

        
        <div className="bg-white p-4 shadow rounded">
          <Image src="/asdas/asdasda.jpg" alt="Project 2" height={50} width={50}   className="mb-4 rounded" />
          <h4 className="text-lg text-gray-800 font-bold">Project 2</h4>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis.</p>
        </div>

        
        <div className="bg-white p-4 shadow rounded">
          <Image src="/asdas/asdasda.jpg" alt="Project 3" height={50} width={50}  className="mb-4 rounded" />
          <h4 className="text-lg text-gray-800 font-bold">Project 3</h4>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis.</p>
        </div>
      </div>
    </section>
  );
};

