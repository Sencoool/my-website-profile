export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white">
      {/* Profile Section*/}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 bg-gray-100 shadow-lg rounded-3xl overflow-hidden p-16 border border-gray-200 max-w-5xl w-full mt-16"> 
        <div className="flex justify-center max-w-4/5">
          <img src="satoru.jpg" className="object-cover overflow-hidden rounded-full border-8 border-orange-400"  alt="Jiramet Profile"/>
        </div>

        {/*Profile Info*/}
        <div className="text-center md:text-left max-w-2xl"> 
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Hi, I'm <span className="text-orange-500">Jiramet</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Third-year Information Technology student enthusiastic to learn about Full-Stack Development. Familiar with{' '}
            <span className="text-orange-500">JavaScript, React, Node.js, and SQL</span>. Eager to explore new technologies and contribute to real-world projects.
          </p>
          <a href="https://github.com/Sencoool" className="inline-block bg-orange-500 text-white text-xl font-semibold py-3 px-8 mt-6 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300" >
            🚀 Visit my GitHub
          </a>
        </div>
      </div>

      <div className="w-full max-w-5xl my-20 border-t border-gray-300"></div> 

      {/* Projects Section */}
      <div className="flex flex-col items-center w-full bg-gray-100 py-24 px-6">
        <p className="font-bold text-4xl text-orange-500 mb-4">PROJECTS</p> 
        <p className="text-gray-600 mt-2 max-w-3xl text-center text-lg"> 
          Here are some of the projects I’ve worked on recently.
        </p>
      </div>

      {/* Education Section */}
      <div className="flex flex-col items-center w-full py-24 px-6"> 
        <p className="font-bold text-4xl text-orange-500 mb-4">EDUCATION</p> 
        <p className="text-gray-600 mt-2 max-w-3xl text-center text-lg"> 
          My academic background and learning experiences.
        </p>
      </div>
    </main>
  );
}