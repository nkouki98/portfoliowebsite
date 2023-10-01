import React from 'react';

const ProjectPage=()=> {
  return (
    <div id='proj' className="bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 py-8">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-semibold">Project Name</h1>
          <p className="mt-2 text-lg">A brief project description goes here.</p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit sit amet libero dapibus
            ullamcorper. Fusce eu justo sed elit euismod tincidunt.
          </p>
        </div>
      </section>

      {/* Sketches Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Sketches</h2>
          {/* Add your sketches or images here */}
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Demo Video</h2>
          {/* Add your demo video or embed code here */}
        </div>
      </section>

      {/* More Sections */}
      {/* Add more sections as needed for your project, such as features, team, contact, etc. */}
    </div>
  );
}

export default ProjectPage;
