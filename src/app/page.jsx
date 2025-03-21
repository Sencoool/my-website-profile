export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen">
      {/* header */}
      <div className="flex justify-center w-full h-[50px] bg-orange-400">
        <p className="font-bold text-2xl">
          
        </p>
      </div>
      
      {/* profiles */}
      <div className="flex items-center justify-center w-full max-w-4xl py-16">
  <div className="w-1/3 mr-8 rounded-lg overflow-hidden shadow-lg">
    <img
      src="your-profile-image.jpg" // Replace with your image
      className="w-full h-64 object-cover"
      alt="Jiramet Profile"
    />
  </div>
  <div className="w-2/3">
    <p className="text-3xl font-bold mb-2">Hi, I'm Jiramet</p>
    <p className="text-xl mb-2">
      A junior-year student majoring in{' '}
      <span className="text-orange-400">Information Technology</span>.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Passionate about Full-Stack Development. Familiar with JavaScript, React, Node.js, and SQL. Committed to applying my skills in real-world projects and continuously learning new technologies.
    </p>
    <a
      href="https://github.com/Sencoool"
      className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-50 font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
    >
      Visit my GitHub
    </a>
  </div>
</div>

      <div className="flex justify-center w-full h-[500px]">
        <p className="font-bold text-2xl text-orange-400">PROJECTS</p>

      </div>
      <div className="flex justify-center w-full h-[500px]">
        <p className="font-bold text-2xl text-orange-400">EDUCATION</p>

      </div>
    </main>
  );
}
