export default function footer(){
    return(
        <footer className="w-full bg-white border-t border-gray-300">
            <div className="flex items-center justify-between p-6 max-w-6xl mx-auto">
                <p>© 2025 Jiramet</p>
                <div className="flex items-center">
                <a href="https://github.com/Sencoool" className="relative cursor-pointer group">
                Github
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
                </div>
            </div>
        </footer>
    )
}