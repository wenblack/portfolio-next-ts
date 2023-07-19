import Image from 'next/image';
import React from 'react';

export function Project  () {
  return (
    <section className="container mx-auto px-4 py-8">
      <h3 className="text-2xl text-gray-800 font-bold mb-4">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white p-4 shadow rounded">
          <Image src="path/to/project1-image.jpg" alt="Project 1" className="mb-4 rounded" />
          <h4 className="text-lg text-gray-800 font-bold">Project 1</h4>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis.</p>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-4 shadow rounded">
          <Image src="path/to/project2-image.jpg" alt="Project 2" className="mb-4 rounded" />
          <h4 className="text-lg text-gray-800 font-bold">Project 2</h4>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis.</p>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-4 shadow rounded">
          <Image src="path/to/project3-image.jpg" alt="Project 3" className="mb-4 rounded" />
          <h4 className="text-lg text-gray-800 font-bold">Project 3</h4>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis semper convallis.</p>
        </div>
      </div>
    </section>
  );
};

