'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);
  return (

    <main id='about' className="flex flex-col items-center min-h-screen bg-white">
      {/* Profile Section*/}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 bg-gray-100 shadow-2xl shadow-orange-600 rounded-3xl overflow-hidden p-16 border border-gray-200 max-w-7xl w-full mt-30 slide-in-left"> 
      <div className="flex justify-center max-w-4/5">
      <img src="me.png" className="object-cover overflow-hidden rounded-full border-8 border-orange-400"  alt="Jiramet Profile"/>
        </div>

        {/*Profile Info*/}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 overflow-hidden select-none">
            Hi, I'm <span className="text-orange-500">Jiramet</span>
            <span className="block h-0.5 bg-orange-500 mt-2 mx-auto slide-left-right"></span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Third-year Information Technology student enthusiastic to learn about Full-Stack Development. Familiar with{' '}
            <span className="text-orange-500">JavaScript, React, Node.js, and SQL</span>. Eager to explore new technologies and contribute to real-world projects.
          </p>
          <a href="https://github.com/Sencoool" className="inline-block border-2 border-orange-400 text-xl font-semibold py-3 px-8 mt-6 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg hover:text-white transition-all duration-300" >
            🚀 Visit my GitHub
          </a>
        </div>
      </div>

      <div id="education" className="w-full max-w-5xl my-20 border-t border-gray-300"></div> 

      {/* Education Section */}
      <div className="flex flex-col items-center w-full py-10 px-6 fade-in">
        <p className="font-bold text-4xl text-orange-500 mb-4 slide-in-left select-none">EDUCATION</p>
        <p className="text-gray-600 mt-2 max-w-3xl text-center text-lg mb-12 slide-in-left">
          My academic background and learning experiences.
        </p>

        {/* Education Details */}
        <div className="w-full max-w-3xl slide-in-bottom fade-in">
          <div className="mb-8 pb-8 border-b border-orange-700 border-2 rounded-lg p-2 shadow-md shadow-orange-700 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold">King Mongkut's University of Technology North Bangkok (KMUTNB), Prachinburi Campus</h3>
            </div>
            <p className="text-gray-700 mb-1">Bachelor of Information Technology</p>
            <p className="text-gray-700 mb-1">GPAX: <span className='font-bold text-orange-500'>3.82</span> (Expected Graduation: 2026)</p>
            <p className="text-gray-700">2022 - Present</p>
          </div>

          <div className="mb-8 pb-8 border-b border-orange-700 border-2 rounded-lg p-2 shadow-md shadow-orange-700 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold">Chetupon Commercial College, Bangkok</h3>
            </div>
            <p className="text-gray-700 mb-1">Business Computer</p>
            <p className="text-gray-700">2018 - 2021</p>
          </div>
        </div>
      </div>

      <div id="education" className="w-full max-w-5xl my-20 border-t border-gray-300"></div> 

      
      {/* Projects Section */}
      <div id='projects' className="flex flex-col items-center w-full bg-gray-100 py-24 px-6 slide-in-bottom fade-in">
        <p className="font-bold text-4xl text-orange-500 mb-4 select-none">PROJECTS</p>
        <p className="text-gray-600 mt-2 max-w-3xl text-center text-lg mb-12">
          Here are some of the projects I’ve worked on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5 lg:w-3/4">
          {/* Project Card 1 */}
          <div className="w-full p-6 bg-white rounded-lg shadow-md hover:shadow-xl shadow-orange-700 transition-all duration-300">
            <img src="project1.png" alt="Project 1" className="w-full h-80 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">MovieStreaming Full-stack</h3>
            <p className="text-gray-700 mb-4">A responsive web application developed using React and Express.js, leveraging SQLite for seamless data handling.</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <a href="https://github.com/Sencoool/my-movies-react" className="inline-block border-2 border-orange-400 text-xl font-semibold py-3 px-8 mt-6 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg hover:text-white transition-all duration-300">
                <img src="github.png" alt="GitHub Logo" className="inline-block w-5 h-5 mr-2" />
                View Front-end
              </a>
              <a href="https://github.com/Sencoool/Express_Streaming_Server" className="inline-block border-2 border-orange-400 text-xl font-semibold py-3 px-8 mt-6 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg hover:text-white transition-all duration-300">
                <img src="github.png" alt="GitHub Logo" className="inline-block w-5 h-5 mr-2" />
                View Back-end
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="w-full p-6 bg-white rounded-lg shadow-md hover:shadow-xl shadow-orange-700 transition-all duration-300">
            <img src="project2.png" alt="Project 2" className="w-full h-80 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Leaguedle</h3>
            <p className="text-gray-700 mb-4">A personal project combining League of Legends fandom with web development. Enjoy a quick guessing game and explore the code on GitHub!</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <a href="https://github.com/Sencoool/my-league-quiz" className="inline-block border-2 border-orange-400 text-xl font-semibold py-3 px-8 mt-6 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg hover:text-white transition-all duration-300">
                <img src="github.png" alt="GitHub Logo" className="inline-block w-5 h-5 mr-2" />
                View On GitHub
              </a>
              <a href="https://my-league-quiz.vercel.app" className="bg-inline-block border-2 border-orange-400 text-xl font-semibold py-3 px-8 mt-6 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg hover:text-white transition-all duration-300">
                🎮 Play here !
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}