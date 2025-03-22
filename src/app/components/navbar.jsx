export default function Navbar() {
    return(
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 mix-blend">
        <div className="flex items-center justify-between p-6 py-4 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-orange-400">Jiramet Site</h1>
            <nav className="flex">
            <a href="#about" className="relative font-bold text-lg cursor-pointer group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative ml-10 font-bold text-lg cursor-pointer group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#education" className="relative ml-10 font-bold text-lg cursor-pointer group">
                Education
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            </nav>
        </div>
      </header>
    );
}