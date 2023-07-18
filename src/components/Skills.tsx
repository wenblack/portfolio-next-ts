export function Skills ()  {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-800 font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4 shadow rounded">
            <h4 className="text-lg text-gray-800 font-bold mb-2">Front-End Development</h4>
            <ul className="text-gray-600">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h4 className="text-lg text-gray-800 font-bold mb-2">Back-End Development</h4>
            <ul className="text-gray-600">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>Database Management</li>
              <li>Authentication & Authorization</li>
            </ul>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h4 className="text-lg text-gray-800 font-bold mb-2">Additional Skills</h4>
            <ul className="text-gray-600">
              <li>TypeScript</li>
              <li>Git</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Design Principles</li>
              <li>Testing & Debugging</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
