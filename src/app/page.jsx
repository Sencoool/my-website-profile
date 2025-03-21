export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen">
      {/* profiles */}
      <div className="flex items-center justify-items-center w-2/2 h-[800px] bg-stone-50">
        <div className="flex items-center justify-items-center w-1/2 h-[300px] border-4 overflow-hidden mr-20">
        <img
          src="vercel.svg"
          className="w-2/2 h-1/2 items-center"
          alt=""
        />
        </div>
        <div className="flex flex-col justify-items-center w-1/2 h-1/4 border-4">
        <p className="font-bold text-2xl">
          Hi
        </p>
        <p className="font-bold text-2xl">
          My name is <span className="text-orange-400">Jiramet</span>
        </p>
        <p className="font-bold text-2xl">
          a junior-year student majoring in <span className="text-orange-400">Information Technology</span> 
        </p>
        <a className="flex justify-center font-bold border-2 rounded-md w-40" href="https://github.com/Sencoool">Link to my Github</a>
        </div>
      </div>

      <div className="flex justify-center w-full h-[500px] bg-grey bg-stone-700">
        <p className="font-bold text-2xl text-orange-400">PROJECTS</p>

      </div>
      <div className="flex justify-center w-full h-[500px] bg-stone-800">
        <p className="font-bold text-2xl text-orange-400">EDUCATION</p>

      </div>
    </main>
  );
}
